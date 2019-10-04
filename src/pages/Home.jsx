import React, { Component } from 'react'

import Title from '../components/Title.jsx'
import SearchForm from '../components/SearchForm.jsx'
import MovieList from '../components/MovieList.jsx'

class Home extends Component {

  state = {
    usedSearh: false,
    results: []
  }

  _handleResults = (results) => {
    this.setState({
      results, usedSearh: true
    })
  }

  _renderResults () {
    return ( 
      this.state.results.length === 0 ?
      <p>Sorry! Results not found!</p> :
      <MovieList movies={this.state.results}/>
    )
  }

  render() {
    return (
      <div>
        <Title>
          Search Movies
        </Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {
          this.state.usedSearh
          ? this._renderResults()
          : <small>Use the form to search movie</small>
        }
      </div>
    )
  }
}

export default Home
