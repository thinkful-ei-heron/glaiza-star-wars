import React from 'react';

export default class StarWarsResults extends React.Component {
    render() {
        console.log(this.props.results);
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