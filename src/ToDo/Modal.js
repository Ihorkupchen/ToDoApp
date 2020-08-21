import React, {useEffect} from "react";
import ReactDOM from "react-dom";


function Modal(props) {
  const el = document.createElement('div');
  
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return (
    ReactDOM.createPortal(
      <div className="modal-overlay">
            <div className="modal">
                <div className="modal__text">{props.children}</div>
                <div className='modal__btns'>
                    <button className = "modal__btn " onClick={props.remove}>Ok</button>
                    <button className = "modal__btn modal__btn--invert" onClick={props.closeModel}>Cancel</button>
                </div>
            </div>
          </div>, el )


   
    
  );
}


export default Modal;