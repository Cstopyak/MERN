import React from 'react';
import { Link } from 'react-router-dom';


const EducationAdmin = () => {
    return (
        <div className="same-component">
            <div className="same-form">
                <form>
                    <h4> Education Comp</h4>
                    <label htmlFor="text">Education</label>
                    <input type="text"/>
                    <button type="submit">Add Edu</button>
                </form>
            </div>
            <div className="same-item">
                <div className="about-info">
                    {/* Single Education info */}
                    <div className="same-admin">
                        <div className="icons">
                            <Link to={`/editEducation`}><i className="fas fa-edit"></i>Edit</Link>
                            <i className="fas fa-trash">Delete</i>
                        </div>

                        <div className="single-education">
                            <p>Coding Bootcamp</p>
                        </div>
                        <h3 className="item-delete-tab"> the message</h3>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default EducationAdmin;
