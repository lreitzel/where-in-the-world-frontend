import React, { Component } from 'react';

class Cuisine extends Component {

  render() {

    const cuisine = this.props.cuisine
   
    return (
      <div>
        <li>
          {cuisine.name}
        </li>
      </div>
    );
  }

};

export default Cuisine;