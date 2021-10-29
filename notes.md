title: form.title,
ingredients: form.ingredients,
instructions: form.instructions,
cuisine_id: form.cuisine_id

export const addRecipe = (form) => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_RECIPE' })
        const recipeData = {
            title: form.title,
            ingredients: form.ingredients,
            instructions: form.instructions,
            cuisine_id: form.cuisine_id,
            }
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            content: JSON.stringify(recipeData)
        }
        // debugger
        const url = 'http://localhost:3000/recipes'
        fetch(url, configObj)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(function(response) {
            console.log("ok");
        }).catch(function(error) {
            console.log(error);
        });
        // .then(resp => resp.json())
        // .then(recipeToAdd => {
        //     dispatch({
        //         type: 'ADD_RECIPE',
        //         recipeToAdd
        //     })
        // })
        // .catch(error => console.log(error))
    }
}