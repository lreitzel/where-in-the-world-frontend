import React from "react";
import { Component } from "react";
import Recipe from "./Recipe";

class Recipes extends Component {
    
    render () {
        const recipes = this.props.recipes
        const recipeList = recipes.map((recipe, index) => {
            return <Recipe key={index} recipe={recipe} handleDeleteClick={this.props.handleDeleteClick} />
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