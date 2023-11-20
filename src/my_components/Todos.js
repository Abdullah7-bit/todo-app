import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center'>Todos list</h3>
      {props.todos.length === 0 ? <div className="alert alert-info" role="alert">
        No Todo's to Display!
      </div>
        :
        props.todos.map((todo) => {
          console.log(todo.sno);
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }
    </div>
  )
}