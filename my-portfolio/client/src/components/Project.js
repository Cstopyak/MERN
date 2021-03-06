import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../components/myContext/GlobalContext';
// import "../css/Project.css";



const Project = () => {
    const state = useContext(DataContext);
    const [project] = state.project;


    return (
        <div className="main-container">
            <div className="projects">
                <h2 className="title">Projects</h2>
                <div className="projects-center">

                    {
                        project.map(item => (

                            <div className="single-project" key={item._id}>
                                <div className="single-project-img">
                                    <img src={item.images.url} alt="" />
                                </div>
                                <div className="single-project-info">
                                    <h3> {item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>

        </div>
    )
}
export default Project;
