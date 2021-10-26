import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipeContainer from './containers/RecipeContainer';
import CuisineContainer from './containers/CuisineContainer';

function App() {
  
    return (
      <div className="App">
        <h1>Where In The World Is Your Recipe?</h1>
        <Router>
          <Route exact path="/" component={CuisineContainer} />
          <Route exact path="/recipes" component={RecipeContainer} />
        </Router>
      </div>
    )
};

export default App;
