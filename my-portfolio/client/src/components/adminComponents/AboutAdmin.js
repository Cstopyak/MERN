import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';




const AboutAdmin = () => {

    const [about, setAbout] = useState('');
    const [aboutData, setAboutData] = useState([]);
    const [message, setMessage] = useState('');
    const [messageCondition, setMessageCondition] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get('/about');
                console.log(res.data);
                setAboutData(res.data);

            } catch (err) {

            }
        }
        fetchData();

    }, [])


    return (



        
        <div className="same-component">
            <div className="same-form">
                <form>
                    <h4>about admin comp</h4>
                    <label htmlFor="text"> About</label>
                    <textarea name="textarea" cols="30" rows="3"></textarea>
                    <button type="submit">Add About</button>
                </form>

            </div>

            <div className="same-item">
            {
                aboutData.map(item =>(
                    <div className="about-info" key={item._id}>
                    <div className="icons">
                        <Link to={"/edit"} > <i className="fas fa-edit">edit</i></Link>
                        <i className="fas fa-trash">delete</i>
                    </div>
                    <p> {item.about}</p>
                </div>
                ))
            }
                {/* <div className="about-info">
                    <div className="icons">
                        <Link to={"/edit"} > <i className="fasfa-edit">edit</i></Link>
                        <i className="fas fa-trash">delete</i>
                    </div>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </p>
                </div> */}
            </div>
            <h3 className={setMessage ? "new-delete item-delete-tab": "item-delete-tab"}> {message}</h3>

        </div>
    )
}

export default AboutAdmin
