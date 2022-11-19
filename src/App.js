import './App.css';
import {Routes,Route, useParams} from 'react-router-dom'
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

  const [isEmail,setIsEmail] = useState(true);
  const param  = useParams()
  useEffect(()=>{
    setIsEmail(true);
  },[])

  return (
    <div className="App">
      <Navbar
        isEmail={isEmail}
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
        <Footer />
    </div>
  );
}

export default App;
