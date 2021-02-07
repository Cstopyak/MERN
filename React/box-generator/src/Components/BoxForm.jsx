import React, { useState } from 'react';


const BoxForm = (props) => {
    const [myBoxForm, setmyBoxForm] = useState({
        Color: ""
    })

    const OnChangehandler = e => {
        setmyBoxForm({ [e.target.name]: e.target.value })
    }

    const SubmitHandler = e => {
        e.preventDefault();
        props.newSuper(myBoxForm);
        setmyBoxForm({
            Color: ""
            
        })
    }

    return (
        <>
            <h1>Add Color</h1>
            <form onSubmit={SubmitHandler}>

                <div className="form-group">
                    <label htmlFor="Color"> Color</label>
                    <input type="text" name="Color" className="form-control" onChange={OnChangehandler} value={myBoxForm.Color} />

                </div>
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>
        </>
    );
}


export default BoxForm;