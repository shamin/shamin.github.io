import React from 'react'
import Link from 'gatsby-link'
import Social from '../components/social'

const IndexPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 center">
        <div className="contents-home">
          <h1>Shamin Meerankutty</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </div>
    <Social />
    <div className="center">
      <Link to="/contact">Contact</Link>
    </div>
  </div>
)

export default IndexPage
