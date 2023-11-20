// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './my_components/Header';
import { Todos } from './my_components/Todos';
import { AddTodo } from './my_components/AddTodo';
import Footer from './my_components/Footer';


function App() {

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
      <Header title="My Todos" custCondition={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
