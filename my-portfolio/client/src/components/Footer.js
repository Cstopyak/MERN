import React from 'react'
import "../css/Footer.css";
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
const Footer = () => {
    return (
        <React.Fragment>
            <div className="Main__Title">
                <h2 className="Title__Contact">
                    Hello Footer
                </h2>
            </div>

            <div className="Main__Contact">
                <div className="Contact">
                    <div className="Contact__Center">
                        <div className="Contact__Links">
                            <h3> Links</h3>
                            <div className="Links">
                                <li><Link to ="/"/> Home</li>
                                <li><Link to ="/"/> About</li>
                                <li><Link to ="/"/> Projects</li>
                                <li><Link to ="/"/> Contact</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Footer;
