import React from 'react';
import { Component } from 'react';
import './App.css';
import CuisineContainer from './containers/CuisineContainer';


class App extends Component {
  
  render() {
    return (
      <div >
        <h1>Where In The World Is Your Recipe?</h1>
        <h3>Select A Cuisine To See Recipes</h3>
        <CuisineContainer />
      </div>
    )
  };

  
}

export default App;
