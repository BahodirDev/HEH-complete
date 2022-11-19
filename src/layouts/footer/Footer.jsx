import React from 'react';
import './footer.css';
import './responsive/footerresponsive.css'
import pin from './assets/logo_footer.png'
import face_book from './assets/facebook.png'
import insta from './assets/instagram.png'
import linked from './assets/linkedin.png'

function Footer(props) {
    return (
        // <div className='footer '>
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-3 logo_footer ">
        //                 <img src={pin} alt="" />
        //                 <p className='p1_footer'>
        //                     Libertate in perpetuum.
        //                 </p>
        //                 <p className='p2_footer'>
        //                     All rights reserved.

        //                 </p>
        //             </div>
        //             <div className="col-md-3 footer_list">
        //                 <span className='end_list_1'>
        //                 For Investors
        //                 </span>
        //                 <span className='end_list_1'>
        //                 HEH investors
        //                 </span>
        //                 <span className='end_list_1'>
        //                 HEH foundation
        //                 </span>
        //             </div>
        //             <div className="col-md-3 footer_list">
        //                 <span className='end_list_1'>
        //                 Impressum
        //                 </span>
        //                 <span className='end_list_1'>
        //                 AGB
        //                 </span>
        //                 <span className='end_list_1'>
        //                 Privacy
        //                 </span>
        //             </div>

        //             <div className="col-md-3 footer_soc">
        //                 <span className='footer_social_text'>
        //                      Follow our socials:
        //                 </span>
        //                 <div className='footer_social'>
        //                     <img src={face_book} alt="logo" />
        //                     <img src={insta} alt="logo" />
        //                     <img src={linked} alt="logo" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <div className="container-fluid footer">
            <footer className="py-5">
                <div className="row footer_row_list">
                    <div className=" col-lg-3 col-12 col-md-2 mb-3 ul_text">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    <img src={pin} alt="" />
                                    <p className='p1_footer'>
                                        Libertate in perpetuum.
                                    </p>
                                    <p className='p2_footer'>
                                        All rights reserved.
                                    </p>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className=" col-lg-3  col-12 col-md-2 mb-3 ul_text">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">

                                <span className='end_list_1'>
                                    For Investors
                                </span>
                            </a>
                            </li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">

                                <span className='end_list_1'>
                                    HEH investors
                                </span>

                            </a>
                            </li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">

                                <span className='end_list_1'>
                                    HEH foundation
                                </span>

                            </a>
                            </li>

                        </ul>
                    </div>

                    <div className="col-lg-3 col-12 col-md-2 mb-3  ul_text">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">
                                <span className='end_list_1'>
                                    Impressum
                                </span>
                            </a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">
                                <span className='end_list_1'>
                                    AGB
                                </span>
                            </a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">
                                <span className='end_list_1'>
                                    Privacy
                                </span>
                            </a></li>

                        </ul>
                    </div>

                    <div className="col-lg-3 col-12 foot_links">
                        <span className='footer_social_text'>
                              Follow our socials:
                         </span>
                         <div className='footer_social'>
                             <img src={face_book} alt="logo" />
                             <img src={insta} alt="logo" />
                             <img src={linked} alt="logo" />
                         </div>
                    </div>
                </div>

                {/* <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2022 Company, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <link rel="stylesheet" href="" />
                        <link rel="stylesheet" href="" />
                        <link rel="stylesheet" href="" />
                        <link rel="stylesheet" href="" />
                    </ul>
                </div> */}
            </footer>
        </div>
    );
}

export default Footer;