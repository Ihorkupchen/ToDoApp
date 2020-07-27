import React, {useEffect} from "react";
import ReactDOM from "react-dom"


function Modal(props) {
  let el = document.createElement('div')
  
  useEffect(() => {
    document.body.appendChild(el);
    return function cleanup() {
      document.body.removeChild(el);
    };
  });
  

  return (
    ReactDOM.createPortal(
      <div className="modalOverlay">
            <div className="modalWindow">
                <div className="modalBody">{props.children}</div>
                <button className = "modalButton " onClick={props.closeModel} invert>Cancel</button>
                <button className = "modalButtonInvert" onClick={props.remove}>Ok</button>
    
            </div>
          </div>, el )


   
    
  );
}


export default Modal;