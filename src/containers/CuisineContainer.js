import React from "react";
import { Component } from "react";
import { getCuisines } from '../actions/recipeActions'
import { connect } from 'react-redux'
import CuisineCard from "../components/cuisineCard";

class CuisineContainer extends Component {

    componentDidMount(){
        console.log("is this working")
        this.props.getCuisines()
        
    };

    cuisineRender = () => {
        const cuisines = this.props.cuisines
        return cuisines.map(cuisine => <CuisineCard cuisine={cuisine} />)    
    }

    render(){
        
        return(
            <div>
                {this.cuisineRender()}
            </div>
        )
    };

}

const mapStateToProps = state => {
    return({
        cuisines: state.cuisines
    })
}

export default connect(mapStateToProps, { getCuisines })(CuisineContainer);