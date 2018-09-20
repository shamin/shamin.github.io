import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from '../components/header'
import Nav from '../components/nav'
import '../styles/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Shamin Meerankutty\'s Blog' },
        { name: 'keywords', content: 'blog, shamin, shamin meerankutty, shamin.me' },
      ]}
    >
      <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
    </Helmet>
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    {/* <Nav /> */}
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
