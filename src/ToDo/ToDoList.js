import React from "react";

import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <ul className="list">
      {props.todos.map((todo, i) => {
        return <ToDoItem todo={todo} />;
      })}
    </ul>
  );
}


export default ToDoList;