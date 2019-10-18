import React from 'react';
import ValidationError from '../validationError/ValidationError'
import PropTypes from 'prop-types';

class StarWarsSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchName: {
                value: '',
                touched: false
            }
        }
    }

    updateSearchName = (name) => {
        this.setState({ searchName: {value: name, touched: true}})
    }

    validateSearchName = () => {
        const searchName = this.state.searchName.value.trim();

        if(searchName.length === 0) {
            return 'Name is required'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { searchName } = this.state;
        // console.log(`Search Name: ${searchName}`);
        this.props.handleSearchSubmit(searchName.value);
        // console.log(`Search Name ${this.state.searchName}`);
        // event.target.searchName.value = '';
        this.setState({
            touched: false
        })
    }

    render() {

        const searchNameError = this.validateSearchName();

        return(
            <form className="star-wars-search" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="searchName">Search By Name:</label>
                <input type="text" id="searchName" name="searchName" placeholder="skywalker" onChange={e => this.updateSearchName(e.target.value)}/>
                
                {this.state.searchName.touched && (<ValidationError message={searchNameError} />)}
                
                <button type="submit" disabled ={this.validateSearchName()}>Search</button>
            </form>
        )
    }
}

StarWarsSearch.propTypes = {
    handleSearchSubmit: PropTypes.func   
}
export default StarWarsSearch;