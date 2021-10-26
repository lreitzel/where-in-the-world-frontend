const rootReducer = (state = {cuisines: [], recipes: [], loading: false}, action) => {
    switch(action.type){
        case 'LOADING_CUISINES':
            return {
                ...state,
                cuisines: state.cuisines,
                loading: true
            }
        case 'ADD_CUISINES':
            return {
                ...state,
                cuisines: action.cuisines,
                loading: false
            }
        case 'LOADING_RECIPES':
            return {
                ...state,
                recipes: state.recipes,
                loading: true
            }
        case 'ADD_RECIPES':
            return {
                ...state,
                recipes: action.recipes,
                loading: false
            }
        default:
            return state
    }
}

export default rootReducer;