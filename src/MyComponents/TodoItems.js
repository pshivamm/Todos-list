import React from 'react';


export const TodoItems = ({todo}) =>{
    return(
        <div>
            <h4 className="my-3">{todo.title}</h4>
            <p className="my-3">{todo.desc}</p>
        </div>
    )
};