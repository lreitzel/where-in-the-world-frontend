import React from "react";
import Recipes from "../components/Recipes";
import { Component } from "react";
import { connect } from "react-redux";
import { getRecipes } from '../actions/RecipeActions'

class CuisineRecipes extends Component {

    componentDidMount(){
        this.props.getRecipes()
    }

    render(){
        const cuisineId = this.props.match.params.id
        const cuisineRecipes = this.props.recipes.filter(r => r.cuisine.id === parseInt(cuisineId))
        return(
            <div>
                We're in CuisineRecipes right now!
                <Recipes recipes={cuisineRecipes} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return({
        recipes: state.recipes
    })
}

export default connect(mapStateToProps, { getRecipes })(CuisineRecipes)