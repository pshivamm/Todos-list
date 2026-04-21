import React from 'react'
import { TodoItems } from "../MyComponents/TodoItems";



export const Todos = (props) => {
    // export default function Todos(props) {
    return (
        <div className="my-3">
            <h3 className="my-3">Todos List </h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            {/* <TodoItems todo={todo} onDelete={() => props.onDelete(todo)} /> */}
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )
};