import React from "react";


function FilterToDoList(props) {
    
    
  return (
    <ul className="list">
      {props.todos.map((todo) => {
        return <FilterTodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

let FilterTodoItem = ({todo}) => {
    return (
        <li className="item filterItem">{todo.name}</li>
    )
}

export default FilterToDoList;
