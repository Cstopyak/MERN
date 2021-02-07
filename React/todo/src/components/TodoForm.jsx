
import React, { useState } from 'react';

const TodoForm = props => {
    const [myTodoForm, setmyTodoForm] = useState({
        Title: "",
        isCompleted: false
    })


    const OnChangehandler = e => {
        setmyTodoForm({ ...myTodoForm, [e.target.name]: e.target.value })
    }

    // const Completion = e => {
    //     setmyTodoForm({ ...myTodoForm, [e.target.name]: !myTodoForm.notCompleted })
    // }

    const SubmitHandler = e => {
        e.preventDefault();
        props.newTodo(myTodoForm);
        setmyTodoForm({

            Title: "",
            isCompleted: false
            
        })
        console.log(myTodoForm);
    }

    return (
        <>

            <form onSubmit={SubmitHandler}>

                <div className="form-group">
                    <label htmlFor="Title"> Example</label>
                    <input type="text" name="Title" className="form-control" checked={myTodoForm.notCompleted} onChange={OnChangehandler} value={myTodoForm.Title} />

                </div>
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>
            <h1>TodoList</h1>
        </>
    );
}


export default TodoForm;