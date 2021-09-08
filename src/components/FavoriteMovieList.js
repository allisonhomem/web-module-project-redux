import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {removeFavorite} from '../actions/favoritesActions.js';


const FavoriteMovieList = (props) => {
    
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        { props.displayFavorites ? 
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={() => {props.removeFavorite(movie.id)}}>remove_circle</span></span>
                    </Link> 
                </div>
            }) : <div></div>
        }
    </div>);
}


const mapStateToProps = (state)=> {
    return({
      favorites: state.favoritesReducer.favorites,
      displayFavorites: state.favoritesReducer.displayFavorites
    })
  }
  
export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);