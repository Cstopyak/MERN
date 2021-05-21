import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const EducationAdmin = () => {
    const [education, setEducation] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [message, setMessage] = useState('');
    const [messageCondition, setMessageCondition] = useState(false);




    // fetching the data
    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await axios.get(`/education`);
                setEducationData(res.data);
                //   console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData();





    }, [])

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
