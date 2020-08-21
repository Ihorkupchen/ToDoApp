import React from "react";

import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
      <div className= 'block-list'>
        <ul className="list">
          {props.todos.map((todo) => {
            return <ToDoItem todo={todo} key = {todo.id} />;
          })}
        </ul>
      </div>

  );
}


export default ToDoList;