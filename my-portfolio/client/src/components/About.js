import React, { useContext } from 'react';
import { DataContext } from './myContext/Context';

const About = () => {
    const state= useContext(DataContext);

        return (
            <div className="main-container">
                <div className="about">
                    <h2 className="title"> About</h2>
                </div>
                    
            </div>
        )
    }

export default About;

