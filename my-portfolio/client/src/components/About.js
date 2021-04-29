import React, { useContext } from 'react';
import { DataContext } from './myContext/Context';

const About = () => {
    const state= useContext(DataContext);
    const [about] = state.about;

        return (
            <div className="main-container">
                
                    {about.map(item=>(
                        <div className="about">
                    <h2 className="title"> About</h2>
                    <p>
                    {item.about}

                    </p>
                    </div>
                    ))}
                
                    
            </div>
        )
    }

export default About;

