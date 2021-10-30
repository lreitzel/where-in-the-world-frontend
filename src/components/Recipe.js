import React, { Component } from 'react';

class Recipe extends Component {

  render() {

    const recipe = this.props.recipe

    return (
      <div className="card">
        <li>
          <h3>{recipe.title}</h3>
          {recipe.ingredients}
          {recipe.instructions}
        </li>
      </div>
    );
  }

};

export default Recipe;