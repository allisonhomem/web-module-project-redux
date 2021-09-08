import { ADD_FAVORITE, TOGGLE_FAVORITE, REMOVE_FAVORITE} from '../actions/favoritesActions.js';

export const initialFavoritesState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state=initialFavoritesState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAVORITE:
            return {
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAVORITE:
            return {
                
            }
        default:
            return state;
    }
}

export default reducer;