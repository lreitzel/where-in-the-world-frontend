import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Cuisine extends Component {

  render() {

    const cuisine = this.props.cuisine
   
    return (
      <div className="card">
        <NavLink to={`/cuisines/${cuisine.id}`}>
          {cuisine.image}
          {cuisine.name}
        </NavLink>
      </div>
    );
  }

};

export default Cuisine;