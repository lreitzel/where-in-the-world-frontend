import React, { Component } from 'react';

class Recipe extends Component {

  render() {

    const recipe = this.props.recipe

    return (
      <div className="card">
        <li>
          <image src={recipe.image}></image>
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