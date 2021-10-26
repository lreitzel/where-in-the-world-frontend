import React, { Component } from 'react';

class Recipe extends Component {

  render() {

    const recipe = this.props.recipe

    return (
      <div>
        <li>
          {recipe.title}:
          {recipe.ingredients},
          {recipe.instructions}
        </li>
      </div>
    );
  }

};

export default Recipe;