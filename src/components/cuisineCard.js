import React from "react";

const CuisineCard = props => {
    return(
        <div key={props.cuisine.id}>
           <p>{props.cuisine.name}</p>
        </div>
    )
}

export default CuisineCard;