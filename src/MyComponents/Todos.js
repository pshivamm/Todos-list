import React from 'react'
import {TodoItems} from "../TodoItems";



export const Todos = (props) => {
    return(
        <div className="container my-3">
            <h3 className="my-3">Todos List </h3>
            <TodoItems todo={props.todo[0]}/>
        </div>
    )
};