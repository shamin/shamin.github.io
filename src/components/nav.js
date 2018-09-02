import React from 'react'
import Link from 'gatsby-link'

class Nav extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="nav-button-container">
          <div className="nav-button" />
        </div>
        <div className="nav-bar">
          <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
