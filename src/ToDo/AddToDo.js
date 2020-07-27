import React , { useState}   from 'react'


function AddToDo ({onCreate}) {
    const [value, setValue] = useState('');

    function submitHandler (e) {
        e.preventDefault();
        if(value.trim()) onCreate(value);
        setValue('');
       

    }
    
    return (
      
        <form action="" onSubmit={submitHandler} className = 'add'>
          <input value={value} placeholder = 'Enter task and press "Add Task" button' 
            onChange={e => setValue(e.target.value)} />
          <button type="submit">Add Task!</button>
        </form>
      
    );
}


export default AddToDo