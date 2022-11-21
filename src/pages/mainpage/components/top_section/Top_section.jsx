import React from 'react';
import './top_section.css'
import './responsive/top_section_responsive.css';
import vd from './responsive/assets/HEH_Video_final_comp.mp4'

function Top_section(props) {
    return (
        <div className='top_section_1 container-fluid '>
           
            <video width="100%"  autoPlay muted playsInline loop className='video'>
              <source src={vd} type="video/mp4"  />
            </video>
            {/* first top section */}
         
            <div className="row row_top_section">
                <div className="col-1"></div>

                <div className="col-lg-6 col-12">
                    <div id='span_responsive'>
                        <h3 className='big_text_responsive'>We network liberal <span >conservative</span> top</h3>
                    </div>
                    <div className='text_section_2 '>
                        <p className='small_text_section_1  '>
                            Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!
                        </p>
                    </div>
                </div>

                <div className="col-lg-5"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 col-12 top_section_btn_parent">
                    <button className='top_section_btn'>
                        <span className='apply'>
                            Apply
                        </span>
                    </button>
                </div>

            </div>
            {/* first top section end */}
        </div>
    );
}

export default Top_section;