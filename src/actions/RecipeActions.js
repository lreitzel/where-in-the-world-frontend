export const getRecipes = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_RECIPES'})
        fetch('http://localhost:3000/recipes')
        .then(resp => resp.json())
        .then(recipes => {
            dispatch({
                type: 'ADD_RECIPES',
                recipes: recipes
            })
        })
    }
}

export const addRecipe = (form) => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_RECIPE' })
        const recipeData = {
            title: form.title,
            ingredients: form.ingredients,
            instructions: form.instructions,
            image: form.image,
            cuisine_id: form.cuisine_id,
        }
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipeData)
        }
        const url = 'http://localhost:3000/recipes'
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(recipeToAdd => {
            dispatch({
                type: 'ADD_RECIPE',
                recipe: recipeToAdd
            })
        })
    }
}

export const deleteRecipe = (recipeToDelete) => {
    console.log('hitting delete action')
    const recipe = parseInt(recipeToDelete.id)
    return(dispatch) => {
        dispatch({type: 'LOADING_DELETE_RECIPE'})
        fetch(`http://localhost:3000/recipes/${recipe}`, { method: "DELETE"})
        .then(()=> dispatch({
            type: 'DELETE_RECIPE',
            recipe: recipeToDelete
        }))
    }
}