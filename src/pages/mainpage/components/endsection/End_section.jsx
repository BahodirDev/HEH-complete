import React from 'react';
import './endsection.css';
import './responsive/endsection_responsice.css';
import left1 from './responsive/assets/left_.png';
import right1 from './responsive/assets/right_.png';
import middle1 from './responsive/assets/mid_.png';
import left from './responsive/assets/left.png';
import right from './responsive/assets/right.png';
import middle from './responsive/assets/mid.png';

function End_section(props) {
    return (
        <>
            <div className='layer_desktop'>
                <div className='layers_section'>
                </div>
                <div className="layer_1">
                </div>
                <div className="layer_2">
                </div>
                <div className="layer_3">

                </div>
                <div className="layer_4">
                    <div className="side_img_">
                        <img src={left} alt="" />
                    </div>
                    <div className="mid_img_">
                        <img src={middle} alt="" />
                    </div>
                    <div className="side_img2_">
                        <img src={right} alt="" />
                    </div>
                </div>

                {/* <div className="layer_mobile">
                
                </div> */}
                <h3 className='layer_big_text'> What <span>we</span> offer</h3>
                <h3 className='layer_small_text_1'>Offers</h3>
                <p className='layer_small_text_1_con'>Performers with each other and with the high performers of tomorrow</p>
                <h3 className='layer_small_text_2'>Feed</h3>
                <p className='layer_small_text_2_con'>Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!</p>
                <h3 className='layer_small_text_3'>Offers one</h3>
                <p className='layer_small_text_3_con'>Performers with each other and with the high performers of tomorrow.</p>
                <h3 className='layer_small_text_4'>Workspaces</h3>
                <p className='layer_small_text_4_con'>Performers with each other and with the high performers of tomorrow</p>

            </div>

            <div className='layer_mobile_res conatiner'>
                <div className="row layer_mobile_lists">
                    <div className="col-12 flex_direction">
                        <h5 className='big_text_mobile'>What <span>we</span> offer</h5>
                    </div>
                    <div className="col-12 mobile_lists">
                        <h5 className='big_text_mobile_2'>Offers</h5>
                        <span className='mobile_text'>
                            Performers with each other and with the high performers of tomorrow
                        </span>
                    </div>
                    <div className="col-12 mobile_lists">
                        <h5 className='big_text_mobile_2'>Feed</h5>
                        <span className='mobile_text'>
                            Performers with each other and with the high performers of tomorrow
                        </span>
                    </div>
                    <div className="col-12 ">
                        <div className="row mid_img_rel">
                           
                            <div className="col-6 side_img">
                                <img src={left1} alt="" />
                            </div>
                            <div className="col-4 mid_img">
                                <img src={middle1} alt="" />
                            </div>
                            <div className="col-6 side_img2">
                                <img src={right1} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-12 mobile_lists">
                        <h5 className='big_text_mobile_2'>Offers one</h5>
                        <span className='mobile_text'>
                            Performers with each other and with the high performers of tomorrow.
                        </span>
                    </div>
                    <div className="col-12 mobile_lists">
                        <h5 className='big_text_mobile_2'>Workspaces</h5>
                        <span className='mobile_text'>
                            Performers with each other and with the high performers of tomorrow.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default End_section;