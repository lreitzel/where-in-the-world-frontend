import React from "react";
import Recipe from "../components/Recipe";
import { Component } from "react";
import { connect } from "react-redux";
import { getRecipes, addRecipe } from '../actions/RecipeActions'
import RecipeForm from "../components/forms/RecipeForm";
import { deleteRecipe } from "../actions/RecipeActions";

class CuisineRecipes extends Component {

    componentDidMount(){
        this.props.getRecipes()
    }

    handleDeleteClick = (recipe) => {
        this.props.deleteRecipe(recipe)
    }

    render(){
        const cuisineId = this.props.match.params.id
        const cuisineIdNumber = parseInt(cuisineId)
        const cuisineRecipes = this.props.recipes.filter(r => r.cuisine.id === parseInt(cuisineId))
        const filteredRecipes =  cuisineRecipes.map((r,i) => <Recipe key={i} recipe={r} handleDeleteClick={this.handleDeleteClick} />)
        return(
            <div>
                <h3>Recipes</h3>
                {filteredRecipes}
                <RecipeForm cuisineID={cuisineIdNumber} addRecipe={this.props.addRecipe}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return({
        recipes: state.recipes
    })
}

export default connect(mapStateToProps, { getRecipes, addRecipe, deleteRecipe })(CuisineRecipes)