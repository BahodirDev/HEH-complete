import React, { useEffect } from 'react';
import png from './assets/inevestors.png'
import avatar from './assets/avatar.png'
import time from './assets/time2.png'
import arrow from './assets/arrow.png'
import email from './assets/email.png'
import { useNavigate } from 'react-router-dom';
import './news.css';
import './responsive/news_responsive.css';

function HEH_news({setIsEmail}) {
    useEffect(()=>{
        setIsEmail(true);
      },[])
    const navigate = useNavigate();

    return (
        <div className='news container'>
            {/* frame of image */}
            <div className="row news_row">
                <div className="col-lg-12">
                    <div className='back' onClick={() => navigate(-1)}>
                        <p>
                            <img src={arrow} alt="arrow" className='arrow' />
                            Back
                        </p>
                    </div>
                </div>

                {/* email panel */}
                <div className="col-lg-12  email_panel_news">
                    <div className='email_panel_time'>
                        <img src={time} alt="" className='time_icon' />
                        <p className='time'>read 2 min</p>
                    </div>
                    <div className='email_panel_icons'>
                        <img src={email} alt="" className='email_icon' />
                        <p className='time'> investors@heh-network.de</p>
                    </div>
                </div>

                {/* image */}
                <div className="col-lg-12 col img_panel">
                    {/* img by teg by the way */}
                    {/* <img src={png} alt="logo" /> */}
                </div>
            </div>

            <div className="row invest_title_row">
                <div className="col-lg-12 news_title">
                    <h3>“One must not confuse the majority with the truth”</h3>
                </div>
                {/* avatar */}
                <div className="col-lg-2 news_avatar">
                    <img src={avatar} alt="avatar" />
                    <span>
                        <p>Jean Cocteau</p>
                        <p>Lawyer</p>
                    </span>
                </div>
                {/* post */}
                <div className="col-lg-12 news_post">
                    <p>
                        We at HEH are of the opinion that liberal-conservative positions are not sufficiently taken into account in German-language reporting. For this reason , we want to offer editorial content in the long term and in addition to the network app as our core offering, which combines content requirements with linguistic brilliance and should form a renowned counterweight to the otherwise left-leaning journalism .

                       </p>
                       <p>
                       We are also looking for talented authors [students explicitly included ] and a dedicated Chief News Officer [CNO], who will also take on classic public relations, marketing and content creation and content distribution tasks. Salaries can also be paid once the cost-intensive software development has been completed . 
                       </p>
                </div>
            </div>
        </div>
    );
}

export default HEH_news;