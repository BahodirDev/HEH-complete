import React, { useState } from 'react';
import './top_section_2.css'
import './responsive/top_section_2_responsive.css'
import png1 from '../../../../assets/increase.png'
import png2 from '../../../../assets/react.png'
import png3 from '../../../../assets/setting.png'
function Top_section_(props) {
    const [css, setCss] = useState(false)
    const [css2, setCss2] = useState(false)
    const [css3, setCss3] = useState(false)
    return (
        <>
            {/* Cards section */}
            <div className='top_section_2 container '>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className='top_section_2_big_text'>Our <span>target</span> group</h3>
                        <p className='top_section_2_small_text'>We are geared towards (aspiring) liberal-conservative top performers</p>
                    </div>
                </div>
                <div className="row cards_section_2">
                    <div className="col-lg-4 col-md-4 col-xxl-4 col-12 item_cards_list" onMouseOver={() => setCss(true)} onMouseLeave={() => setCss(false)}>
                        <div>
                            <img src={png1} alt="logo" />
                        </div>
                        <span id='bussines'>
                            Bussines
                        </span>
                        <p id='performers'>
                            Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!
                        </p>
                        <p className={css ? 'hidden_txt1' : 'hidden_txt'}>
                            Regardless of whether they are managers, specialists in industry or specialists in the freelance professions: we connect people who aspire to make a difference with their work.
                        </p>
                        <p className={css ? 'hidden_txt1' : 'hidden_txt'}>
                            And of course all those who are moving towards these positions.
                        </p>
                    </div>
                    <div className="col-lg-4  col-md-4 col-xxl-4 col-12 item_cards_list" onMouseOver={() => setCss2(true)} onMouseLeave={() => setCss2(false)}>
                        <div>
                            <img src={png2} alt="logo" />
                        </div>
                        <span id='bussines'>
                            Science
                        </span>
                        <p id='performers'>
                            Performers with each other and with the high performers of tomorrow.
                            An invite-only app for political and professional exchange.
                            Register now for the free beta version!
                        </p>
                        <p className={css2 ? 'hidden_txt1' : 'hidden_txt'}>
                            Technology and progress only exist because of the pioneering spirit of those
                        </p>
                        <p className={css2 ? 'hidden_txt1' : 'hidden_txt'}>
                            who are ahead of their time. At HEH, we want to help women and men from research to create a broader network and offer a stage for their brilliant new solutions.
                        </p>
                    </div>
                    <div className="col-lg-4  col-md-4  col-xxl-4  col-12 item_cards_list" onMouseOver={() => setCss3(true)} onMouseLeave={() => setCss3(false)}>
                        <div>
                            <img src={png3} alt="logo" />
                        </div>
                        <span id='bussines'>
                            Craft
                        </span>
                        <p id='performers'>
                            Performers with each other and with the high performers of tomorrow. An invite-only app for political and professional exchange. Register now for the free beta version!
                        </p>
                        <p className={css3 ? 'hidden_txt1' : 'hidden_txt'}>

                            The craft has golden soil - and in Germany is characterized by excellent quality.
                        </p>
                        <p className={css3 ? 'hidden_txt1' : 'hidden_txt'}>
                            HEH is by no means only aimed at people in so-called "white collar jobs", but also at those who make social prosperity possible in the first place with their precise manual work.
                        </p>
                    </div>

                </div>
            </div>
            {/* cards section edn */}
            {/* Img loyer and text */}
            <div className="cards_section_2_img">
                <div className='text_on_img'>
                    <h3 className='text_on_img_text'>
                        We do not leave <span >conservatism</span> to the far right and liberalism not the big landowners.
                    </h3>
                </div>
            </div>

        </>
    );
}

export default Top_section_;