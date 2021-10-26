import React, { Component } from 'react';

class Cuisine extends Component {

  render() {

    const cuisine = this.props.cuisine
   
    return (
      <div>
        <button>
          {cuisine.name}
        </button>
      </div>
    );
  }

};

export default Cuisine;