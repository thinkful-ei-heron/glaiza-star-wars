import React from 'react';
import StarWarsSearch from './starWars/StarWarsSearch';
import StarWarsResults from './starWarsResult/StarWarsResults';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import Spinner from './spinner/Spinner';

import './App.css'
class App extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        results: null,
        searched: false,
        error: null,
        loading: false
      }
  }

  handleSearchSubmit = (name) => {
    this.setState({ loading: true})

    fetch(`https://swapi.co/api/people?search=${name}`)
    .then(res => {
      this.setState({ loading: false})
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
            // console.log(result.name)
            return { name: result.name}
        })

      })
      }
    })
    .catch(err => this.setState( {error: err.message}))
  }

  render() {
    return (
      <main className="App">
        <h1>Search your favorite star wars character</h1>
        
        {this.state.error && <h2>Sorry, an error occurred: {this.state.error}</h2>}
        
        <ErrorBoundary>
          <StarWarsSearch handleSearchSubmit={this.handleSearchSubmit}/>
        </ErrorBoundary>
          {this.state.loading && <Spinner />}
        <ErrorBoundary>
          {this.state.searched && <StarWarsResults results={this.state.results} />}
        </ErrorBoundary> 
    </main>
    );
  }
 
}

export default App;
