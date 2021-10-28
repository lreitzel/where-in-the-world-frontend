import React, { Component } from "react";

export default class RecipeForm extends Component {

    state = {
        recipe: {
            title: '',
            ingredients: '',
            instructions: ''
        }
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = value.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div>
                <form>
                    <label>
                        Title:
                        <input name="title" type="text" value={this.state.recipe.title} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Ingredients:
                        <input name="ingredients" type="text" value={this.state.recipe.ingredients} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Instructions:
                        <input name="instructions" type="text" value={this.state.recipe.instructions} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Add New Recipe"/>
                </form>
            </div>
        )
    }
}