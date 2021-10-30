import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import RecipeContainer from './containers/RecipeContainer';
import CuisineContainer from './containers/CuisineContainer';
import CuisineRecipes from './containers/CuisineRecipes';
import Navbar from './components/Navbar';
import Header from './components/header';

function App() {
  
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={RecipeContainer} />
            <Route exact path="/cuisines" component={CuisineContainer} />
            <Route exact path="/cuisines/:id" component={CuisineRecipes} />
          </div>
        </Router>
      </div>
    )
};

export default App;
