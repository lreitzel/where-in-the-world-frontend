import React from "react";
import { Component } from "react";
import { getCuisines } from '../actions/CuisineActions'
import { connect } from 'react-redux'
import Cuisines from "../components/Cuisines";

class CuisineContainer extends Component {

    componentDidMount(){
        console.log("is this working")
        this.props.getCuisines()
    };

    render(){
        return(
            <div>
                <h3>Select A Cuisine To See Recipes</h3>
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