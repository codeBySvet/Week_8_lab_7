import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
// Class to hold and format the display of indevidual movie items
class MovieItem extends Component {
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
                </Card>
            </div>
        );
    }
}
export default MovieItem;