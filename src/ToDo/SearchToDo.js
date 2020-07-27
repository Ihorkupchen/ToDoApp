import React  from "react";


function SearchToDo(props) {
   
    
    function onKeyUpHandler (e) {
        
        props.search(e.target.value);
        
    }
    

    return(
    
        <input type="text" 
            onKeyUp = {onKeyUpHandler}
            placeholder = 'Enter task name for search...' 
            className = 'search'/>
        
    )
}

export default SearchToDo;