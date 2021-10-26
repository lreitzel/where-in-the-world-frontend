export const getCuisines = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CUISINES'})
        fetch('http://localhost:3000/cuisines')
        .then(resp => resp.json())
        .then(cuisines => {
            console.log(cuisines)
            dispatch({
                type: 'ADD_CUISINES',
                cuisines: cuisines
            })
        })
    }
}