import React from 'react'
import {Link} from 'react-router-dom';


const ProjectAdmin = () => {
    return (
        <div className="same-component">
            <div className="same-form">
                <form>
                    <h4> Project Components</h4>
                    <label htmlFor="text">Id</label>
                    <input type="text" name="project__Id" required id="product__Id">

                    </input>

                    <label htmlFor="text">Title</label>
                    <input type="text" name="title__Id" required id="title__Id">
                        
                    </input>

                    <label htmlFor="text">Description</label>
                    <input type="text" name="description__Id" required id="description__Id" cols="30" rows="3">
                        
                    </input>
                    <div className="upload">
                        <input type="file" name="file" id="file_Upload"></input>
                    </div>
                    <div className="file__Image" > <img src="" alt=""/>
                    <span>x</span>

                    </div>

                    <button> Add Project</button>

                </form>
            </div>

            <div className="same__Item">
                <div className="about__Info">
                    <div className="projects__Admin">
                        <div className="icons">
                        <Link to="/editProject/"> <i className="fas fa-edit"></i></Link>
                        <i className="fas fa-trash" ></i> 
                        </div>

                        {/* single project */}

                        <div className="single__Project">
                            <div className="single__ProjectImage">
                                <img src="" alt=""></img>
                            </div>
                            <div className="single__ProjectInfo">
                                <h3>Title</h3>
                                <p> lorem</p>
                            </div>
                        </div>
                        <h3 className="Item__Delete">slkjdflsdj</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectAdmin;
