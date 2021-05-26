import React, { useState, useEffect } from 'react';
import "../css/Contact.css";
import axios from 'axios';

const Contact = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ banner, setBanner ] = useState('');
    const [ bool, setBool ] = useState('');


    return (
        <div className="main-container">
            <div className="contactForm">
                <h2 className="title"> Contact</h2>
                <div className="contactForm-center">
                    <div className="contact_form">
                        <form>
                            <p>Lets get in touch!</p>
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                placeholder="import name..." />


                            <label htmlFor="email">Email</label>
                            <input type="email"
                                placeholder="import email..." />


                            <label htmlFor="message">Message</label>
                            <textarea type='text'
                                name="message"
                                id=""
                                placeholder='import contact reason...' />

                            <div className="send-btn">
                                <button className="button" type="submit">Send Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;
