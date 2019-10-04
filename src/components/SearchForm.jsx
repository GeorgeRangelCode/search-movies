import React, { Component } from 'react'

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
    alert(this.state.inputValue)
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
