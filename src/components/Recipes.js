import React from "react";
import { Component } from "react";
import Recipe from "./Recipe";

class Recipes extends Component {

    // handleDeleteClick = (recipe) => {
    //     this.props.deleteRecipe(recipe)
    // }
    
    render () {
        const recipes = this.props.recipes
        const recipeList = recipes.map((recipe, index) => {
            return <Recipe key={index} recipe={recipe} />
        })
        return(
            <div>
                <ul>
                    {recipeList}
                </ul>
            </div>
        )
    }
}

export default Recipes;