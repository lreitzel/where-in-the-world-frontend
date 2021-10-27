import React from "react";
import { Component } from "react";
import Cuisine from "./Cuisine";

class Cuisines extends Component {
    
    render () {
        const cuisines = this.props.cuisines
        const cuisineList = cuisines.map((cuisine, index) => {
            return <Cuisine key={index} cuisine={cuisine} />
        })
        return(
            <div>
                {cuisineList}
            </div>
        )
    }
}

export default Cuisines;