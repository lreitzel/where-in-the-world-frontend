import React, { Component } from 'react';
import DeleteButton from './buttons/DeleteButton';

class Recipe extends Component {

  render() {

    const recipe = this.props.recipe

    console.log(this.props)

    return (
      <div className="card">
          <DeleteButton handleDeleteClick={this.props.handleDeleteClick} recipe={recipe} />
          <img src={recipe.image} alt="recipe"></img>
          <h3>{recipe.title}</h3>
          <h4>Ingredients:</h4>
          {recipe.ingredients}
          <h4>Instructions:</h4>
          {recipe.instructions}
      </div>
    );
  }

};

export default Recipe;