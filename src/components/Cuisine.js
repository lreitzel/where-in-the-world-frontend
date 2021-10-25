import React, { Component } from 'react';

class Cuisine extends Component {

  render() {
      debugger
    return (
      <div>
        <li>
          {this.props.cuisine.name}
        </li>
      </div>
    );
  }

};

export default Cuisine;