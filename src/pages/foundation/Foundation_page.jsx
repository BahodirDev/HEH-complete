import React, { useEffect } from 'react';
import png from './assets/inevestors.png'
import avatar from './assets/avatar.png'
import time from './assets/time2.png'
import arrow from './assets/arrow.png'
import email from './assets/email.png'
import { useNavigate } from 'react-router-dom';
import './responsive/foundation_responsive.css';
import './foundation.css';

function Foundation_page({setIsEmail}) {
    useEffect(()=>{
        setIsEmail(true);
      },[])
    const navigate = useNavigate();
    return (
        <div className='foundation container'>
            {/* frame of image */}
            <div className="row foundation_row">
                <div className="col-lg-12">
                    <div className='back' onClick={() => navigate(-1)}>
                        <p>
                            <img src={arrow} alt="arrow" className='arrow' />
                            Back
                        </p>
                    </div>
                </div>

                {/* email panel */}
                <div className="col-lg-12  email_panel_found">
                    <div className='email_panel_time'>
                        <img src={time} alt="" className='time_icon' />
                        <p className='time'>read 3 min</p>
                    </div>
                    <div className='email_panel_icons'>
                        <img src={email} alt="" className='email_icon' />
                        <p className='time'> investors@heh-network.de</p>
                    </div>
                </div>

                {/* image */}
                <div className="col-lg-12 col img_panel_found">
                    {/* img by teg by the way */}
                    {/* <img src={png} alt="logo" /> */}
                </div>
            </div>

            <div className="row found_title_row">
                <div className="col-lg-12 foundation_title">
                    <h3>"Do not neglect to exercise the powers of good."</h3>
                </div>
                {/* avatar */}
                <div className="col-lg-2 found_avatar">
                    <img src={avatar} alt="avatar" />
                    <span>
                        <p>Johann Wolfgang von Goethe</p>
                        <p>Lawyer</p>
                    </span>
                </div>
                {/* post */}
                <div className="col-lg-12 found_post">
                    <p>
                        After mask affairs, corruption scandals in Austria and other incidents, the impression has often arisen that there are no decent conservatives [anymore] - the AfD slides into right-wing extremism; the Union into insignificance. At HEH, on the other hand , we aim to be part of the solution and not the problem.
                    </p>
                    <p>
                        For this purpose, we transfer 10% of our profits and other donations directed to the network to the HEH Foundation once the app is complete. It is the completion of the intention to contribute to a great future of a great country with an entrepreneurial project and to want to improve it on a small scale.
                    </p>
                    <p>
                        In the long term, we want to use the funds available to promote liberal-conservative top performers from all walks of life, enable events – especially discussion rounds with people who think differently – support liberal-conservative projects and get involved in the prevention of extremism; The latter especially with regard to right-wing extremism, which we, as members of the moderate-conservative spectrum , are particularly responsible for curbing .
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Foundation_page;