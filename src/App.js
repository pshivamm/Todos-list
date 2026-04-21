import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { Cards } from './MyComponents/cards';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") !== null) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  else {
    initTodo = [];
  };

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    const updatedTodos = todos.filter((e) => {
      return e !== todo;
    });
    setTodos(updatedTodos);
  }

  const addTodos = (title, desc) => {
    console.log("I'm adding the todos.", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="Todo List App" searchbar={true} />
      <main>
        <div className='container'>
          <Cards />
          <AddTodo addTodo={addTodos} />
          <Todos todos={todos} onDelete={onDelete} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;