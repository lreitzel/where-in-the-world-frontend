import React from "react";
import { Component } from "react";
import { getCuisines } from '../actions/recipeActions'
import { connect } from 'react-redux'
import Cuisines from "../components/Cuisines";

class CuisineContainer extends Component {

    componentDidMount(){
        console.log("is this working")
        this.props.getCuisines()
        
    };

    // cuisineRender = () => {
    //     const cuisines = this.props.cuisines
    //     return cuisines.map(cuisine => <CuisineCard key={cuisine.id} name={cuisine.name}/>)    
    // }

    render(){
        
        return(
            <div>
                <Cuisines
                    cuisines={this.props.cuisines} 
                />
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