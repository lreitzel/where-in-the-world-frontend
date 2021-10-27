import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Cuisine extends Component {

  render() {

    const cuisine = this.props.cuisine
   
    return (
      <div>
        <NavLink to={`/cuisines/${cuisine.id}`}>
          {cuisine.name}
        </NavLink>
      </div>
    );
  }

};

export default Cuisine;