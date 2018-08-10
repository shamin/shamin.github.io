import React from 'react'
import Link from 'gatsby-link'
import Social from '../components/social'

const Contact = () => (
  <div id="contact" className="container">
    <div className="contents">
      <div className="row">
        <div className="col-12 center">
          <div className="section">
            <h3 className="heading">Email Me.</h3>
            <h2 className="data"><a href="mailto:iam@shamin.me">iam@shamin.me</a></h2>
          </div>
          <div className="section">
            <h3 className="heading">Call Me.</h3>
            <h2 className="data"><a href="tel:+919400636582">+91 9400 636 582</a></h2>
          </div>
          <div className="row social">
            <Social />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
