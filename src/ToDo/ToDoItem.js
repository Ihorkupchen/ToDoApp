import React, { useContext, useState } from "react";
import Context from "./context";
import {changeStatus, removeTodo} from "./actions";
import Modal from "./Modal";


function ToDoItem({todo}) {

  const [isModalOpen, setModalOpen] = useState(false);
  const { dispatch } = useContext(Context);

  function toggleModel () {
    setModalOpen(!isModalOpen);

  } 

  function remove () {
    dispatch(removeTodo(todo.id));
    setModalOpen(!isModalOpen);

  }
  function toggleStatus (e) {
      const senderElementName = e.target.tagName.toLowerCase();
      if(senderElementName !== 'button'){
        dispatch (changeStatus(todo.id))
      }
  }

  const classes = ['item__text'];
  if (todo.done) classes.push("item__text--done");

  return (
    <>
      <li className="item"
          onClick = {toggleStatus}
      >
        <span className={classes.join(" ")}>
          {todo.name}
        </span>
        {todo.done &&
        <button
          className = "item__del-btn"
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
