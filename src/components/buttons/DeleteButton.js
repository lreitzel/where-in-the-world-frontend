import React from "react";

const DeleteButton = (props) => {
    return(
       <button className="del-btn" onClick={props.handleDelete(props.recipe)}>
           X
       </button>
    )
}

export default DeleteButton