import React from "react";
import { Component } from "react";
import { getRecipes } from '../actions/RecipeActions'
import { connect } from 'react-redux'
import Recipe from "../components/Recipe";
import { deleteRecipe } from "../actions/RecipeActions";

class RecipeContainer extends Component {

    componentDidMount(){
        console.log("is this working")
        this.props.getRecipes()
    };

    handleDeleteClick = (recipe) => {
        this.props.deleteRecipe(recipe)
    }

    render(){
        const recipes = this.props.recipes.map((r,i) => <Recipe key={i} recipe={r} handleDeleteClick={this.handleDeleteClick} />)
        return(
            <div>
                {recipes}
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