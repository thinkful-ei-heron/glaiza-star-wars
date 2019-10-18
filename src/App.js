import React from 'react';
import StarWarsSearch from './starWars/StarWarsSearch';
import StarWarsResults from './starWarsResult/StarWarsResults';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

class App extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        results: [],
        searched: false,
        error: null
      }
  }

  handleSearchSubmit = (name) => {
    const url = `https://swapi.co/api/people?search=${name}`;
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {'content-type': 'application/json'}
    })
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(resData => {
      if(resData.count === 0) {
        this.setData({
          results: null,
          searched: true
        })
      } else {
        this.setState({ 
          searched: true, 
          results: resData.results.map(result => {
            console.log(result.name)
            return { name: result.name}
        })

      })
      }
    })
    .catch(err => this.setState( {error: err.message}))
  }

 
  render() {
    console.log(this.state.results);
    // console.log(this.state.searched);
    return (
      <main className="App">
        <h1>Search below your favorite star wars character</h1>
        <ErrorBoundary>
          <StarWarsSearch handleSearchSubmit={this.handleSearchSubmit}/>
        </ErrorBoundary>

        <ErrorBoundary>
          {this.state.searched && <StarWarsResults results={this.state.results} />}
        </ErrorBoundary> 
    </main>
    );
  }
 
}

export default App;
