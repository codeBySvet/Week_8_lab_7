import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

// Class for the home page of the navbar containing the content of the component
class Read extends Component
{

    componentDidMount(){
        //Calling axios to perform a http get request from the desired URL and return a promise
        axios.get('http://localhost:4000/api/movies')
         //This is the promise. Once the data is obtained, then update the state
        .then((response)=>{
            this.setState({mymovies: response.data.mymovies})
        })
        //This is going to be an error function if .then does not work
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;