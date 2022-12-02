import './App.css';
import { Routes, Route, useParams, Link } from 'react-router-dom'
import Main_Page from './pages/mainpage/Main_Page';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';
import Invetors_page from './pages/investors/Invetors_page';
import HEH_news from './pages/news/HEH_news';
import Foundation_page from './pages/foundation/Foundation_page';
import Email from './pages/Email/Email';
import { useEffect, useState } from 'react';
import Notify from './emailNotify/Notify';

function App() {

  const [isEmail, setIsEmail] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsEmail(true);
  }, [])

  return (
    <div className="App">
      <Navbar
        isEmail={isEmail}
        setIsOpen={setIsOpen}
      />
      <div className="place_stage">
        <Routes>
          {/* Main menu */}
          <Route path='/' element={<Main_Page
            setIsEmail={setIsEmail}
          />} />
          {/* Investors page */}
          <Route path='/investors' element={<Invetors_page
            setIsEmail={setIsEmail}
          />} />
          {/* News page */}
          <Route path='/news' element={<HEH_news
            setIsEmail={setIsEmail}
          />} />
          {/* Foundation page */}
          <Route path='/foundation' element={<Foundation_page
            setIsEmail={setIsEmail}
          />} />
          {/* Email page */}
          <Route path='/email' element={<Email
            setIsEmail={setIsEmail}
            isEmail={isEmail}
          />} />
        </Routes>
      </div>
      {
        isOpen &&
        <div className='hidden_nav' onClick={()=>setIsOpen(false)}>
          <div className='hidden_nav_links' onClick={(e)=>e.stopPropagation()}>
            <ul className="ul_hidden list-unstyled">
              <li className="nav-item_hidden active">
                {/* <a className="nav-link" href="#">For investors <span className="sr-only"></span></a> */}
                <Link to={'/investors'} className="nav-link" href="#" onClick={()=>setIsOpen(false)}>For investors </Link>
              </li>

              <li className="nav-item_hidden">
                <Link to={'/news'} className="nav-link" href="#" onClick={()=>setIsOpen(false)}>HEH news </Link>
              </li>
              <li className="nav-item_hidden">
                <Link to={'/foundation'} className="nav-link" href="#" onClick={()=>setIsOpen(false)}>HEH foundation </Link>
              </li>
              {
                isEmail &&
                <li className="nav-item_hidden" id='btn_link'>
                  <Link to={'/email'} className="nav-link nav-link nav_btn" href="#" onClick={()=>setIsOpen(false)}><span> Received invitation</span> </Link>
                  {/* <a className="nav-link nav_btn " href="#"></a> */}
                </li>
              }
            </ul>
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;



