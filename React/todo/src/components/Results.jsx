import React, { useState } from 'react';

const Results = props => {

    const isDone ={
        backgroundColor: "green"
    }

    const isCompleted = e =>{
        props.completed(props.index)
    }

    
    return (
        <>
            {
                
                    <div class="AddTodo">
                        
                        <h3 style={props.item.isCompleted? isDone : {isCompleted}}>  {props.item.Title} <label><input type="checkbox" name="isCompleted" onChange={isCompleted}  checked={props.item.isCompleted}></input></label></h3>
                    
                    </div>
                    
                
            }
        </>

    );
}

export default Results;