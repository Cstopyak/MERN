import React, { useContext } from 'react';
import { DataContext } from './myContext/Context';

const About = () => {
    const state = useContext(DataContext);
    const [about] = state.about;

    return (
        <div className="main-container">
            <div className="about">
                <h2 className="title"> About</h2>
                {about.map(item => (

                    <div className="about-info" key={item._id}>
                        <p>{item.about}</p>
                    </div>

                ))}

                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

</p>
            </div>
        </div>
    )
}

export default About;

