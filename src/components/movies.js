import React, { Component } from 'react';
import MovieItem from './movieitem';

class Movies extends Component
{
    render(){
        //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
        return this.props.films.map((film)=>{
            return <MovieItem movie={film} key={film.imdbID}></MovieItem>
        })
    }
}
export default Movies;