import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/pizza-logo.svg'
import Button from '../Button'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img width="38" src={logo} alt="Pizza logo" />
          </Link>
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <Link to="/cart">
            <Button />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
