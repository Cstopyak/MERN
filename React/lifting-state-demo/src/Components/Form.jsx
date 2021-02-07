import React, {useState } from 'react';

const Form = props => {
    const [myForm, setmyForm] = useState({
        Alias: "",
        Realname: "",
        Power: "",
        Hq: "",
        Weakness: ""
    })

    const onChangehandler = e => {
        setmyForm({...myForm, [e.target.name]: e.target.value})
    }
    const SubmitHandler = e => {
        e.preventDefault();
        //add my data here
        props.newSuper(myForm);
        setmyForm({
        Alias: "",
        Realname: "",
        Power: "",
        Hq: "",
        Weakness: ""
    })
    }
    return(
        <>
        <h1> add a super Hero!</h1>
            <form onSubmit= {SubmitHandler}>
                <div className="form-group">
                    <label htmlFor="Alias"> Alias</label>
                    <input type="text" name="Alias" className="form-control" onChange= { onChangehandler } value={myForm.Alias}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="Realname"> Realname</label>
                    <input type="text" name="Realname" className="form-control" onChange= { onChangehandler } value={myForm.Realname}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="Power"> Power</label>
                    <input type="text" name="Power" className="form-control" onChange= { onChangehandler } value={myForm.Power}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="Hq"> HQ</label>
                    <input type="text" name="Hq" className="form-control" onChange= { onChangehandler } value={myForm.Hq}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="Weakness"> weakness</label>
                    <input type="text" name="Weakness" className="form-control" onChange= { onChangehandler } value={myForm.Weakness}/>
                    
                </div>
                <input type="submit" value ="add" className="btn btn-primary" />
            </form>
        </>
    );

}

export default Form;