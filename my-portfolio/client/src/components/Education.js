import React, { useContext } from 'react';
import { DataContext } from '../components/myContext/GlobalContext';



const Education = () => {
    const state = useContext(DataContext); 
    const [education] = state.education;
    // console.log(education);
    //ending here for the day need to finish education




    return (
        <div className="main-container">
            <div className="education">
                <h2 className="title">Education</h2>
                <div className="education-center">
                    {/* Single Education method Static */}
                    <div className="single-education">
                        <p>Bachelors of science </p>
                    </div>

                    <div className="single-education">
                        <p>Bachelors of science </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Education;
