import React, { useReducer } from "react";
import Context from "./ToDo/context";
import reducer from "./ToDo/reducer";
import ToDoList from "./ToDo/ToDoList";
import FilterToDoList from "./ToDo/FilterToDoList";
import AddToDo from "./ToDo/AddToDo";
import SearchToDo from "./ToDo/SearchToDo";

function App() {
    const initialState = {
        isSearch: '',
        todos:[],
        filterTodos: null
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (


        <Context.Provider value={{ dispatch }}>
          <div className="wrapper">
            <SearchToDo isSearch = {state.isSearch}/>

           {state.isSearch ? <FilterToDoList todos={state.filterTodos}/>
           : <ToDoList todos={state.todos} /> }

            <AddToDo />

          </div>
        </Context.Provider>


  );
}

export default App;
