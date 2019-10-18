import React from 'react';
import './StarWarsResults.css';

export default class StarWarsResults extends React.Component {
    render() {
        if(this.props.results === null) {
            return (
                <p className='noResult'>Sorry, No Results Found!!!</p>
            );
        } else {
            return (
                <ul>
                    {this.props.results.map((person, i) => {
                        return <li key={i}>{person.name}</li>
                     })
                    }
                </ul>
            );
        }
    }
}