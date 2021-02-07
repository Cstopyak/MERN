import React, { useState } from 'react';


const Form = (props) => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: '',
    });

    const createUser = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    const userValid = (UsernameInput) => {
        if (UsernameInput.length > 2){
            return true;
        }
        return false;
    }

    return (
        <div>
            <form >
                <div>
                    <label>Username: </label>
                    <input type="text"  name= "username" onChange={createUser} />
                    {!userValid(form.username) && <p> must be greater than 2</p>}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" name= "email" onChange={createUser} />
                    {!userValid(form.email) && <p> must be greater than 2</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name= "password" onChange={createUser} />
                    {!userValid(form.password) && <p> must be greater than 2</p>}
                </div>

            </form>
            <div>
                <h1> List from form</h1>
                <ul>
                    <li>
                        {form.username}
                    </li>
                    <li>
                        {form.email}
                    </li>
                    <li>
                        {form.password}
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Form;