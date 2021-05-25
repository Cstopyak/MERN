import React, { Component } from 'react';
import "../css/Contact.css";

const Contact = () => {

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
        // <div className="Contact__Container">

        //     <div className="Contact">
        //         <div className="Contact__Grid">


        //                 <div className="Banner">
        //                 <h2 className="title"> Lets get in touch! </h2>

        //                 </div>
        //                 <form>

        //                     <div className="Form">
        //                         <div className="Form__Control">
        //                             <label className="Label" htmlFor="name"> Name</label>
        //                             <input type="text" placeholder="name..."
        //                                 required
        //                             />
        //                         </div>
        //                         <div className="Form__Control">
        //                             <label className="Label" htmlFor="email"> Email</label>
        //                             <input type="text" placeholder="email..."
        //                                 required
        //                             />
        //                         </div>
        //                         <div className="Form__Control">
        //                             <label className="Label" htmlFor="message"> Message</label>
        //                         </div>
        //                         <div className="Form__Control">
        //                             <textarea type="text" name="message" id="" placeholder='contact reason...' cols="30"
        //                                 rows="10"></textarea>
        //                         </div>
        //                         <div className="send-btn">
        //                             <button className="button" type="submit">Send Email</button>
        //                         </div>
        //                     </div>

        //                 </form>

        //         </div>
        //     </div>
        // </div>
    )
}

export default Contact;
