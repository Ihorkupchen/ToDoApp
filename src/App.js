import React, { useReducer } from "react";
import ToDoList from "./ToDo/ToDoList";
import FilterToDoList from "./ToDo/FilterToDoList";
import Context from "./ToDo/context";
import AddToDo from "./ToDo/AddToDo";
import reducer from "./ToDo/reducer";
import SearchToDo from "./ToDo/SearchToDo";

function App() {

const initialState = {
    todos : [],
    isSearch: '',
    filterTodos: null
} 
  const [state, dispatch] = useReducer(
    reducer, initialState
  );

  
  function addTodo(name) {
    dispatch({
      type: "add",
      payload: name
    });
  }

  function filter(name) {
    dispatch({
      type: "filter",
      payload: name
    });
  }



  return (

      <div>
        <Context.Provider value={{ dispatch }}>
          <div className="wrapper">
            <SearchToDo search = {filter} isSearch ={state.isSearch}/>
           
           {state.isSearch ? <FilterToDoList todos={state.filterTodos}/>
           : <ToDoList todos={state.todos} /> }
            
            
            <AddToDo onCreate={addTodo} />
          
          </div>
        </Context.Provider>
      </div>

  );
}

export default App;
