import React, { Component } from 'react';
import "../css/Contact.css";
import { Grid, Cell, Button } from 'react-mdl';
const Contact = () => {

        return (
            <div className="Contact__Container">
                {/* <div className="Contact__Form">
                    <h2 className="Title"> Get In Touch</h2>
                    <div className="Contact__Center">
                        <div className="Contact__Form">
                            <form>
                                <p> message</p>

                                <label htmlFor="name"> Name</label>
                                <input type="text" placeholder="import name..."
                                    required
                                />

                                <label htmlFor="email"> Email</label>
                                <input type="text" placeholder="import email..."
                                    required
                                />

                                <label htmlFor="message"> Message</label>
                                <textarea type="text" name="message" id="" placeholder='import contact reason...' cols="30"
                                    rows="10"></textarea>

                                <div className="send-btn">
                                    <button type="submit">Send Email</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div> */}
                <div className="Contact">
                    <div className="Contact__Grid">
                        

                            <div className="Banner">
                                <h1> Lets Get In Touch</h1>
                                <hr />
                            </div>
                            <form>

                                <div className="Form">
                                    <div className="Form__Control">
                                        <label className="Label" htmlFor="name"> Name</label>
                                        <input type="text" placeholder="name..."
                                            required
                                        />
                                    </div>
                                    <div className="Form__Control">
                                        <label className="Label" htmlFor="email"> Email</label>
                                        <input type="text" placeholder="email..."
                                            required
                                        />
                                    </div>
                                    <div className="Form__Control">
                                        <label className="Label" htmlFor="message"> Message</label>
                                    </div>
                                    <div className="Form__Control">
                                        <textarea type="text" name="message" id="" placeholder='contact reason...' cols="30"
                                            rows="10"></textarea>
                                    </div>
                                    <div className="send-btn">
                                        <Button raised colored className="Button__style" type="submit">Send Email</Button>
                                    </div>
                                </div>
                                
                            </form>
                        
                    </div>
                </div>
            </div>
        )
    }

export default Contact;
