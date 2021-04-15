import React, { useContext } from 'react';

import AboutAdmin from './AboutAdmin';
import ProjectAdmin from './ProjectAdmin';
import { Link } from 'react-router-dom';

const Admin = () => {




    return (
        <div className="main-container">
            <br />
            <h2 className="title">Admin forms</h2>
            

                <div className="admin-center">

                    {/* aboutAdmin component */}
                    <h4 className="admin-title">About component</h4>
                    <AboutAdmin />
                    {/* end of aboutAdmin component */}

                    <br />
                    <br />
                    <hr style={{ border: "1px solid lightgrey" }} />
                    <br />

                    {/*projectsAdmin component */}
                    <h4 className="admin-title">Projects component</h4>
                    <ProjectAdmin />

                    {/*end of projectsAdmin component */}

                    <br />
                    <br />
                    <hr style={{ border: "1px solid lightgrey" }} />
                    <br />



                </div>



                

                <div className="back_to_home">
                    <div className="back_box">
                        <h2>Only admin can have accesss here</h2>
                        <Link to="/">Back to home</Link>
                    </div>

                </div>
        </div>
    )
}

export default Admin;
