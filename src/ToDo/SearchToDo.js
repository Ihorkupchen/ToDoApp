import React, {useContext} from "react";
import Context from "./context";
import {filterTodos} from "./actions";



function SearchToDo({isSearch}) {

    const { dispatch } = useContext(Context);

    function onChangeHandler (event) {
        dispatch(filterTodos(event.target.value));
    }

    return(
        <input
            value={isSearch}
            className = 'search-input'
            type="text"
            onChange={onChangeHandler}
            placeholder = 'Enter task name for search...'
        />
    )
}

export default SearchToDo;