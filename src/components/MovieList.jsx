import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie.jsx'

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movies } = this.props
    return (
      <div className="MovieList">
        {
          movies.map(movie => (
            <div key={movie.imdbID} className="MovieList-item">
              <Movie
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            </div>
          ))
        }
      </div>
    )
  }
}

export default MovieList
