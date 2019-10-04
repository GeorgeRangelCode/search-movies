import React, { Component } from 'react'

const API_KEY = '3bce520a'
class SearchForm extends Component {

  state = {
    inputValue: ''
  }

  _handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  _handleSubmit = (event) => {
    event.preventDefault()
    const { inputValue } = this.state
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`)
      .then((response) => response.json())
      .then((results) => {
        const { Search = [], totalResults = "0"} = results
        console.log({ Search, totalResults })
        this.props.onResults(Search)
      })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>      
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Movie to search..."  
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchForm
