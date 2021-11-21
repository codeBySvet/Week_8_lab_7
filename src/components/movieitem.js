import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


// Class to hold and format the display of indevidual movie items
export class MovieItem extends Component {
    render() {
        return (
            <div>
                {/* Using built in react component to format display  */}
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.poster}></img>
                            <footer>
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+ this.props.movie._id} className="btn btn-primary">Edit</Link>

                </Card>
            </div>
        );
    }
}
export default MovieItem;