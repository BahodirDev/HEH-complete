import React from 'react';
import './css/notify.css';
import png from '../assets/logo.png'
function Notify(props) {
    return (
        <div className='notify container'>
            <div className="row notify_row">
                <div className="col-lg-12">
                    <img src={png} className="logo_notify" alt="logo" />
                    <h6 className='under_logo_text_notify'>HEH</h6>
                </div>
                <div className="col-lg-12">
                    <h4 className='notify_text_reg'>Register confirmation</h4>
                </div>
                <div className="col-lg-12">
                    <p className='notify_text'>Hi, Your appointment is all set. If you have any questions, feel free to get in touch.</p>
                </div>
                <div className="col-lg-12">
                    <p className='notify_text'>HEH group</p>
                </div>
                <div className="col-lg-12">
                    <h4 className='notify_text_reg'>(877) 671-3534</h4>
                </div>
                <div className="col-lg-12">
                    <p className='notify_text'>Please note!

                        The most economical protection available is Released Value since it is offered at no additional charge. However, the protection is minimal. Under this option, the mover assumes liability for no more than 60 cents per pound per article. For example, if your mover lost or damaged a 10-pound stereo component valued at $1,000, you would only receive $6.00 in compensation (60 cents x 10 pounds).

                        Full Value Protection and Released Value are not insurance policies governed by state insurance laws; instead, they are Federal contractual tariff levels of liability authorized under Released Rates Orders of the Surface Transportation Board of the U.S. Department of Transportation.

                        Any items damaged during the move, Tophelpers, LLC will repair, or compensate within reason. This is our guarantee which we stand by 100%.</p>
                </div>
                <div className="col-lg-12">
                    <button className='notify_btn'>
                        HEH network newsletter
                    </button>
                </div>
                <div className="col-lg-12">
                    <p className='notify_text'>To cancel, please contact us at least 72 hours in advance! To reschedule, please contact
                        us at least 24 hours in advance!</p>
                </div>
                <div className="col-lg-3">
                    <button className='small_btn'>
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Notify;