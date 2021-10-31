import React, { Component } from 'react';

class Recipe extends Component {

  render() {

    const recipe = this.props.recipe

    return (
      <div className="card">
        <li>
          {/* <button onclick={this.props.handleDeleteClick(recipe)}>X</button> */}
          <img src={recipe.image} alt="recipe"></img>
          <h3>{recipe.title}</h3>
          <h4>Ingredients:</h4>
          {recipe.ingredients}
          <h4>Instructions:</h4>
          {recipe.instructions}
        </li>
      </div>
    );
  }

};

export default Recipe;