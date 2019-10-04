import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ButtonBackToHome extends Component {
  render() {
    return (
      <Link
        className="button is-info"
        to="/"
      >
        Volver a la portada
      </Link>
    )
  }
}

export default ButtonBackToHome
