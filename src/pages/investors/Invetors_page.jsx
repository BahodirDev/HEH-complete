import React, { useEffect } from 'react';
import './investors.css';
import './responsive/investorsresponsive.css'
import png from './assets/inevestors.png'
import avatar from './assets/avatar.png'
import time from './assets/time2.png'
import arrow from './assets/arrow.png'
import email from './assets/email.png'
import { useNavigate } from 'react-router-dom';

function Invetors_page({setIsEmail}) {

    useEffect(()=>{
        setIsEmail(true);
      },[])
    const navigate = useNavigate()

    return (
        <div className='investors container'>
            {/* frame of image */}
            <div className="row invest_row">
                <div className="col-lg-12">
                    <div className='back' onClick={()=>navigate(-1)}>
                        <p>
                            <img src={arrow} alt="arrow" className='arrow' />
                             Back
                        </p>
                    </div>
                </div>

                {/* email panel */}
                <div className="col-lg-12  email_panel_invest">
                    <div className='email_panel_time'>
                        <img src={time} alt="" className='time_icon' />
                        <p className='time'>read 1 min</p>
                    </div>
                    <div className='email_panel_icons'>
                        <img src={email} alt="" className='email_icon'  />
                        <p className='time'> investors@heh-network.de</p>
                    </div>
                </div>

                {/* image */}
                <div className="col-lg-12 col img_panel_invest">
                    {/* img by teg by the way */}
                    {/* <img src={png} alt="logo" /> */}
                </div>
            </div>

            <div className="row invest_title_row">
                <div className="col-lg-12 invest_title">
                    <h3>"It's always time for a new beginning."</h3>
                </div>
                {/* avatar */}
                <div className="col-lg-12 invest_avatar">
                    <div className='invest_avatar_d'>
                    <img src={avatar} alt="avatar" />
                    <span>
                        <p>Konrad Adenaue</p>
                        <p>CO-Founde</p>
                    </span>
                    </div>
                </div>
                {/* post */}
                <div className="col-lg-12 invest_post">
                    <p className='invest_post_p'>
                        For the development, expansion and maintenance of the HEH network, we need a six-figure amount in the long term, which can only be fi nanced over time through the income from the app itself .
                        Are you an investor, entrepreneur or private individual and feel committed to liberal-conservative values? The HEH network offers attractive participation models from EUR 10,000 for supporters who help us to scale our business model. Come on board so we can no longer do right winger conservatism; no longer leave liberalism to the big landowners.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Invetors_page;