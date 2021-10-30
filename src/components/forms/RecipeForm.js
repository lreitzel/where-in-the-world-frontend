import React, { Component } from "react";

export default class RecipeForm extends Component {

    state = {
        title: '',
        ingredients: '',
        instructions: '',
        image: '',
        cuisine_id: this.props.cuisineID
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addRecipe(this.state)
        this.setState({ title: '', ingredients: '', instructions: '', image: '' })
    }

    render() {
        return(
            <div className="card">
                <form className="new-recipe-form" onSubmit={event => this.handleOnSubmit(event)}>
                    <input name="cuisine_id" type="hidden" value={this.props.cuisineID} />
                    <label forHTML="title">Title:</label>
                        <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
                    <label forHTML="ingredients">
                        Ingredients:
                    </label>
                        <input name="ingredients" type="text" value={this.state.ingredients} onChange={this.handleInputChange} />
                    <label forHTML="instructions">
                        Instructions:
                    </label>
                        <input name="instructions" type="text" value={this.state.instructions} onChange={this.handleInputChange} />
                    <label forHTML="image">Image URL:</label>
                        <input name="image" type="text" value={this.state.image} onChange={this.handleInputChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}