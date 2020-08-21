import React , { useState, useContext}   from 'react';
import {createTodo, filterTodos} from "./actions";
import Context from "./context";


function AddToDo () {
    const { dispatch } = useContext(Context);
    const [value, setValue] = useState('');

    function submitHandler (e) {
        e.preventDefault();
        if(value.trim()) {
            dispatch(createTodo(value));
            dispatch(filterTodos(''))
        }
        setValue('');
    }
    
    return (
      
        <form action="" onSubmit={submitHandler} className = 'add'>
          <input
              className='add__input'
              value={value}
              placeholder = 'Enter task and press "Add Task" button'
              onChange={e => setValue(e.target.value)} />
          <button className='add__btn' type="submit">Add Task!</button>
        </form>
      
    );
}


export default AddToDo