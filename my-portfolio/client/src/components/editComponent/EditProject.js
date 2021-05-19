import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    project_id: '',
    title: '',
    description: ''
}




const EditProject = (props) => {
    const [project, setProject] = useState(initialState);
    const [images, setImages] = useState(false);
    const [message, setMessage] = useState(false);
    const history = useHistory();

    // upload image functionality

    const handleUpload = async (e) => {

        e.preventDefault();

        try {
            const file = e.target.files[0];
            if (!file) return alert('no files exist')

            if (file.size > 1024 * 1024) {
                return alert('size is too big')
            }

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                return alert('incorrect file format')
            }

            let formData = new FormData();
            formData.append('file', file);

            const res = await axios.post('/upload', formData, {
                headers: { 'content-type': 'multipart/form-data' }
            })

            setImages(res.data);


        } catch (err) {
            console.log(err.response.data.msg);
        }

    }
    // delete image
    const handleDestroy = async () => {

        try {

            await axios.post('/destroy', { public_id: images.public_id })
            setImages(false);


        } catch (err) {
            console.log(err.response.data.msg);
        }


    }

//gathering data

useEffect(()=>{

    axios.get(`/project/${props.match.params.id}`)
    .then(res=>{
        // console.log(res.data)
        setProject({
            project_id:res.data.project_id,
            title:res.data.title,
            description:res.data.description,
        })
    }).catch(err=>console.log(err))
},[])





    return (
        <div className="edit">
            <div className="same-component">
                <div className="same-form">
                    <form>
                        <h3 className="updated"> Update Project</h3>
                        <label htmlFor="text">Id</label>
                        <input type="text" name="project_id" required id="project_id"
                        value={project.project_id}/>

                        

                        <label htmlFor="text">Title</label>
                        <input type="text" name="title" required id="title"
                        value={project.title}/>


                        <label htmlFor="text">Description</label>
                        <input type="text" name="description" required id="description" cols="30" rows="3"
                        value={project.description}/>

                        <div className="upload">
                            <input type="file" name="file" id="file_up" />

                            <div id="file_img" >
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>x</span>

                            </div>
                        </div>
                        <div className="btns">
                            <button> Update Project</button>
                            <Link to={`/admin`}><button className="cancel-btn"> Cancel</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProject;
