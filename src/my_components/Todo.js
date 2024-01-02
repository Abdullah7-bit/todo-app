
import React from 'react'
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';
import { useState, useEffect } from 'react';

export default function Todo() {
    let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  // Delete function
  const onDelete = (todo) => {
    // console.log("Hi, I am onDelete of Todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };


  // Add Todo Function
  const addTodo = (title, desc) => {
    // If todo json is empty
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    // console.log(newTodo); 

  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    // localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (
    <>
    <AddTodo addTodo={addTodo}  />
    <Todos todos={todos} onDelete={onDelete} />
    </>
  )
}
