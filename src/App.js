import React from 'react';
import StarWarsSearch from './starWars/StarWarsSearch';

class App extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        results: [],
        error: null
      }
  }

  handleSearchSubmit = (name) => {
    fetch(`https://swapi.co/api/people?search=${name}`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(resData => {
      this.setState({ results: resData.results.map(result => {
        console.log(result);
        return { name: result.name}
      })})
    })
    .catch(err => this.setState( {error: err.message}))
  }


  render() {
    // const result = this.state.results
    return (
      <main className="App">
        <div>Star Wars App</div>
        <StarWarsSearch handleSearchSubmit={this.handleSearchSubmit}/>
    
    </main>
    );
  }
 
}

export default App;
