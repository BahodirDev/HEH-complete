import React, { useEffect } from 'react';
import './main_page.css'
import Top_section from './components/top_section/Top_section';
import Top_section_2 from './components/top_section_2/Top_section_2';
import End_section from './components/endsection/End_section';
import End_up_section from './components/endupsection/End_up_section';

function Main_Page({setIsEmail}) {
    useEffect(()=>{
        setIsEmail(true);
      },[])
    return (
        <div className='main_page'>
            {/* main page top section */}
            <Top_section />
            {/* main page middle section */}

            <Top_section_2 />
            {/* main page end section */}

            <End_section />
            {/* main page endUp section */}

            <End_up_section />
        </div>
    );
}

export default Main_Page;