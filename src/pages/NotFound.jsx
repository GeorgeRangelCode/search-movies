import React, { Component } from 'react'
import ButtonBackToHome from '../components/ButtonBackToHome.jsx'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="title">
          404!
        </h1>
        <h2>
          No existe la Página
        </h2>
        <ButtonBackToHome />
      </div>
    )
  }
}

export default NotFound