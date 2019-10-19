import React from 'react';
import StarWarsSearch from './starWars/StarWarsSearch';
import StarWarsResults from './starWarsResult/StarWarsResults';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import Spinner from './spinner/Spinner';
import logo from './img/starwars.png'
import swordLogo from './img/sword.png';
import './app.css'

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

  handleSearchSubmit = (keyword, searchType) => {
    this.setState({ loading: true})

    fetch(`https://swapi.co/api/${searchType}?search=${keyword}`)
    .then(res => {
      this.setState({ loading: false})
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(resData => {
      if(resData.count === 0) {
        this.setState({
          results:  null,
          searched: true
        })
      } else {
        this.setState({ 
          searched: true, 
          loading: false,
           results: resData.results.map(result => {
            return { name: result.name ? result.name : result.title}
        })

      })
      }
    })
    .catch(err => this.setState( {error: err.message}))
  }

  render() {
  
    return (
      
      <main className="App">
        <img src={logo} alt="star wars"/>
        <img src={swordLogo} alt="sword" className="sword"/>
        <h1>search</h1>
       
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
