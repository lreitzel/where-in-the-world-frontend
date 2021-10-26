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
        default:
            return state
    }
}

export default rootReducer;