import React from 'react'
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Footer = () => {

    const scrollToElement = (element) => [
        scroller.scrollTo(element, {
            duration: 800,
            delay: 50,
            smooth: true,
            offset: -18
        })
    ]
    return (
        <React.Fragment>
            <div className="main-title">
                {/* took line out to get margin to be better */}
            </div>

            <div className="main-contact">
                <div className="contact">
                    <div className="contact-center">
                        <div className="contact-center-links">
                            <h3> Links</h3>
                            <div className="contact-links">
                                <li onClick={() => scrollToElement('home')}><Link to="/">Home</Link></li>
                                <li onClick={() => scrollToElement('About')}><Link to="/">About</Link></li>
                                <li onClick={() => scrollToElement('Education')}><Link to="/">Education</Link></li>
                                <li onClick={() => scrollToElement('Projects')}><Link to="/">Projects</Link></li>
                                <li onClick={() => scrollToElement('Contact')}><Link to="/">Contact</Link></li>
                            </div>
                        </div>
                        <div className="contact-center-media">
                            <h3> Get to know me</h3>
                            <div className="contact-media">
                                <li><a href="https://www.linkedin.com/in/colby-stopyak-0ab384143/"><i className="fab fa-linkedin">LinkedIn</i></a></li>
                                <li><a href="https://github.com/Cstopyak"><i className="fab fa-github"></i>GitHub</a></li>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </React.Fragment>
    )
}

export default Footer;
