import React from 'react';


export const TodoItems = ({ todo, onDelete }) =>{
    return(
        <div>
            <h4 className="mb-2">{todo.title}</h4>
            <p className="mb-2">{todo.desc}</p>
            <button className='btn btn-sm btn-danger mt-2' onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    );
};