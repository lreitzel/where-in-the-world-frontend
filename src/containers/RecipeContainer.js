import React from "react";
import { Component } from "react";
import { getRecipes } from '../actions/RecipeActions'
import { connect } from 'react-redux'
import Recipes from "../components/Recipes";
import { deleteRecipe } from "../actions/RecipeActions";

class RecipeContainer extends Component {

    componentDidMount(){
        console.log("is this working")
        this.props.getRecipes()
    };


    render(){
        return(
            <div>
                <Recipes recipes={this.props.recipes} />
            </div>
        )
    };

}

const mapStateToProps = state => {
    return({
        recipes: state.recipes
    })
}

export default connect(mapStateToProps, { getRecipes, deleteRecipe })(RecipeContainer);