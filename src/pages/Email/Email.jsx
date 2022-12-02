import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from './assets/arrow.png';
import './email.css'
// import './responsive/emailresponsive.css'
import './responsive/emailresponsive2.css'
function Email({ isEmail, setIsEmail }) {
    useEffect(() => {
        setIsEmail(false);
    }, [])
    const navigate = useNavigate()
    return (
        <div className=" email container">
            Back
            <div className="row arrow_row">
                <div className="col-xl-12">
                    <div className='back_email' onClick={() => navigate(-1)}>
                        <p>
                            <img src={arrow} alt="arrow" className='arrow_email' />
                            Back
                        </p>
                    </div>
                </div>
            </div>
            {/* Back */}
            {/* desktop vrsion */}

            <div className=" email_place"id='email_p' >
                <div className="col-4 left_side_email">
                    <div className="col-lg-12">
                        <h3 className='email_title'>Apply now for free membership to
                            be one of our first users!</h3>
                    </div>
                </div>
                <div className="col-6 right_side_email">
                    <div className="row right_side_email_row">
                        <div className="col-lg-6  col-12">
                            <input type="text" className='form-control email_input' placeholder='First Name' />
                        </div>
                        <div className="col-lg-6 col-12">
                            <input type="text" className='form-control email_input' placeholder='Last Name' />
                        </div>
                        <div className="col-lg-6 col-12">
                            <select className='form-control email_input' placeholder='Choose gender'>
                                <option className='email_input email_input_option'>Choose Gender</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-12">
                            <input type="text" className='form-control email_input' placeholder='Current ocupation' />
                        </div>
                        <div className="col-lg-6 col-12">
                            <input type="email" className='form-control email_input' placeholder='Email address' />
                        </div>
                        <div className="col-lg-6 col-12">
                            <input type="number" className='form-control email_input' placeholder='Phone Number' />
                        </div>
                        <div className="col-lg-12">
                            <textarea className='form-control email_text' placeholder='Why do you want to become a member of the HEH Networks? *'></textarea>
                        </div>
                        {/* checkbox */}
                        <div className="col-lg-12 input_check">
                            <span className="email_input_check_" >
                                <input type="checkbox" className='email_input_check' />
                            </span>
                            <p className='email_input_pg'>
                                I am committed to the free-democratic basic order within the meaning of the Basic Law and confirm that I am not/have not been a member of a group that is observed by the Office for the Protection of the Constitution - this includes in particular the AfD and the Identitarian Movement (cf. the terms and conditions regarding contractual penalties in the event of incorrect information)
                            </p>
                        </div>
                        <div className="col-lg-12 input_check">
                            <span className="email_input_check_" >
                                <input type="checkbox" className='email_input_check' />
                            </span>
                            <p className='email_input_pg'>
                                I have read the <a href="!#" className='mark'>General Terms</a> and Conditions and the <a href="!#" className='mark'>Privacy Policy</a> and hereby agree.
                            </p>
                        </div>
                        <div className="col-lg-12 input_check">
                            <span className="email_input_check_" >
                                <input type="checkbox" className='email_input_check' />
                            </span>
                            <p className='email_input_pg'>
                                I would like to be informed about the further course of the project and receive the free HEH newsletter (Optional).

                            </p>
                        </div>
                        <div className="col-lg-12 col-12 text-center">
                            <button className='apply_email'>Apply for Membership</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* desktop vrsion end */}
            {/* mobile version */}
            <div className='row mobile_row_email'>
                <div className="col-12">
                    <h3 className='email_title_hidden_mob'>Apply now for free membership to
                        be one of our first users!</h3>
                </div>
                <div className=" col-12">
                    <input type="text" className='form-control email_input_mob' placeholder='First Name' />
                </div>
                <div className=" col-12">
                    <input type="text" className='form-control email_input_mob' placeholder='Last Name' />
                </div>
                <div className=" col-12">
                    <select className='form-control email_input_mob'>
                        <option>Choose gender</option>
                    </select>
                </div>
                <div className=" col-12">
                    <input type="text" className='form-control email_input_mob' placeholder='Current ocupation' />
                </div>
                <div className=" col-12">
                    <input type="eamil" className='form-control email_input_mob' placeholder='Email address' />
                </div>
                <div className=" col-12">
                    <input type="number" className='form-control email_input_mob' placeholder='Phone number' />
                </div>
                <div className=" col-12">
                    <textarea className='form-control email_text_mob' placeholder='Why do you want to become a member of the HEH Networks? *'></textarea>
                </div>
                <div className="col-xl-12 input_check_mobile">
                    <span className="input_check_mob_" >
                        <input type="checkbox" className='input_check_mob' />
                    </span>
                    <p className='email_input_pg'>
                        I am committed to the free-democratic basic order within the meaning of the Basic Law and confirm that I am not/have not been a member of a group that is observed by the Office for the Protection of the Constitution - this includes in particular the AfD and the Identitarian Movement (cf. the terms and conditions regarding contractual penalties in the event of incorrect information)
                    </p>
                </div>
                <div className="col-xl-12 input_check_mobile">
                    <span className="input_check_mob_" >
                        <input type="checkbox" className='input_check_mob' />
                    </span>
                    <p className='email_input_pg'>
                        I have read the <a href="!#" className='mark'>General Terms</a> and Conditions and the <a href="!#" className='mark'>Privacy Policy</a> and hereby agree.
                    </p>
                </div>
                <div className="col-xl-12 input_check_mobile">
                    <span className="input_check_mob_" >
                        <input type="checkbox" className='input_check_mob' />
                    </span>
                    <p className='email_input_pg'>
                        I would like to be informed about the further course of the project and receive the free HEH newsletter (Optional).

                    </p>
                </div>
                <div className='col-12 apply'>
                    <button className='apply_btn'>Apply for Membership</button>
                </div>
            </div>

            {/* text */}
            <div className="row text_row">
                <div className="col-xl-12 col-lg-12 text_section_email">
                    <p className='email_text_p'>
                        It's very simple: fill out the form below. If your profile fits our target group, you will receive an exclusive access link upon completion of the app, which you can use to start the registration process. This consists of two segments with political questions, in which it is necessary to achieve certain agreement values. We want to ensure a minimum consensus within the network and prevent politically extreme opinions from finding their way into the community.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Email;