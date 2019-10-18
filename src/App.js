import React from 'react';
import StarWars from './starWars/StarWars';

class App extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        people: [],
        loading: false,
        error: null

      }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then()
    .catch(error => this.setState( {error}))
  }


  render() {
    return (
      <main className="App">
        <h1>Star Wars App</h1>
        <StarWars />
      </main>
    );
  }
 
}

export default App;
