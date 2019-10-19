import React from 'react';
import ValidationError from '../validationError/ValidationError'
import PropTypes from 'prop-types';
import '../starWars/starWarsSearch.css';

class StarWarsSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: {
                value: '',
                touched: false
            },
            searchType: 'people'
        }
    }

    updateKeyword = (name) => {
        this.setState({ keyword: {value: name, touched: true}})
    }

    updateSearchType = (type) =>{
        this.setState({ searchType: type.target.value})
    }

    validateKeyword(){
        if(this.state.keyword.value === '' || this.state.keyword.value === undefined) {
            return 'Please enter a keyword!!!'
        }
    }

    validateSearchType() {
        if(this.state.searchType === null) {
            return 'Please select an option!!!'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { keyword, searchType } = this.state;
        this.props.handleSearchSubmit(keyword.value, searchType);
        event.target.keyword.value = '';
        this.setState({
            keyword: '',
            touched: false
        })
    }

    render() {
        const keywordError = this.validateKeyword();
        return(
            <form className="star-wars-search" onSubmit={e => this.handleSubmit(e)} >

                <label htmlFor="searchFor">Search For:</label>
                <select name="searchFor"   onChange={e => this.updateSearchType(e)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="starships">StarShips</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                </select>

                <label htmlFor="keyword">Keyword:</label>
                <input type="text" id="keyword" name="keyword" onChange={e => this.updateKeyword(e.target.value)}/>
                {this.state.keyword.touched && (<ValidationError message={keywordError} />)}
                
                <button type="submit" disabled ={ this.validateKeyword() }>Search Now</button>
            </form>
        )
    }
}

StarWarsSearch.propTypes = {
    handleSearchSubmit: PropTypes.func   
}
export default StarWarsSearch;