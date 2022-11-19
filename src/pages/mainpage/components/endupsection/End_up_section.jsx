import React from 'react';
import './end_up_section.css';
import './responsive/endupsection.css';
import png1 from '../../../../assets/ends/setting_end.png'
import png2 from '../../../../assets/ends/home.png'
import png3 from '../../../../assets/ends/people.png'
import png4 from '../../../../assets/ends/bee.png'
import png5 from '../../../../assets/ends/pound.png'
import png6 from '../../../../assets/ends/couple.png'

function End_up_section(props) {
    return (
        <div className='end_up_section container'>
            <div className="row">
                <h3 className='end_up_section_text col-lg-12'>What we <span>stand</span> for </h3>
            </div>
            <div className="row end_cards">
                <div className="col-lg-4 col-12  end_section_list">
                    <img src={png1} alt="logo" />
                    <h5 className='golden_print'>Performanc</h5>
                    <p className='golden_print_text'>Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!</p>
                </div>
                <div className="col-lg-4 col-12  end_section_list">
                    <img src={png2} alt="logo" />
                    <h5 className='golden_print'>Rule of Law</h5>
                    <p className='golden_print_text'>Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!</p>
                </div>
                <div className="col-lg-4 col-12 end_section_list">
                    <img src={png3} alt="logo" />
                    <h5 className='golden_print'>Freedom</h5>
                    <p className='golden_print_text'>Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!</p>
                </div>
                <div className="col-lg-4 col-12  end_section_list_2">
                    <img src={png4} alt="logo" />
                    <h5 className='golden_print'>Progress</h5>
                    <p className='golden_print_text'>Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!</p>
                </div>
                <div className="col-lg-4 col-12  end_section_list_2">
                    <img src={png5} alt="logo" />
                    <h5 className='golden_print'>Law and Order</h5>
                    <p className='golden_print_text'>Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!</p>
                </div>
                <div className="col-lg-4 col-12  end_section_list_2">
                    <img src={png6} alt="logo" />
                    <h5 className='golden_print'>Traditionaly</h5>
                    <p className='golden_print_text'>Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!</p>
                </div>
            </div>
        </div>
    );
}

export default End_up_section;