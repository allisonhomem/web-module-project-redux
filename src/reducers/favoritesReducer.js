import { ADD_FAVORITE, TOGGLE_FAVORITE, REMOVE_FAVORITE} from '../actions/favoritesActions.js';

export const initialFavoritesState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state=initialFavoritesState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAVORITE:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoritesReducer;