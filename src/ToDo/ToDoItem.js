import React, { useContext, useState } from "react";
import Context from "./context";
import Modal from "./Modal";

function ToDoItem({todo}) {

  const [isModalOpen, setModalOpen] = useState(false)
  const { dispatch } = useContext(Context);
  const classes = [];

  function toggleModel () {
    setModalOpen(!isModalOpen);
    isModalOpen &&
    dispatch (
      {
          type:'status',
          payload: todo.id
      })
  } 

  function remove () {
    dispatch({
      type: "remove",
      payload: todo.id})
      setModalOpen(!isModalOpen)

  }  

  if (todo.done) classes.push("done");
  return (
    <>
      <li className="item"
          onClick = {() => dispatch (
                      {
                          type:'status',
                          payload: todo.id
                      })}
      >
        <span className={classes.join(" ")}>
          {todo.name}
        </span>
        {todo.done &&
        <button
          className = "del"
          onClick={toggleModel}
        >
          Delete
        </button> }
      </li>
      {isModalOpen &&
        <Modal remove = {remove} closeModel = {toggleModel} >
            Do you really want to delete this task?
        </Modal>
      }
    </>
  );
}



export default ToDoItem;
