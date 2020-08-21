import React from "react";


function FilterToDoList(props) {

  return (
      <div className='block-list'>
          <ul className="list">
              {props.todos.map((todo) => {
                  return <FilterTodoItem todo={todo} key={todo.id} />;
              })}
          </ul>
      </div>
  );
}

function FilterTodoItem ({todo}) {
    return (
        <li className="item item--filter">{todo.name}</li>
    )
}

export default FilterToDoList;
