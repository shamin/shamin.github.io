import React from 'react'
import Link from 'gatsby-link'
import Social from '../components/social'
import Blog from '../components/blog';

const IndexPage = (data) => {
  console.log(data)
  return(
  <div>
        <div className="contents-home">
          <h1>Shamin Meerankutty</h1>
          <p>Full Stack Developer</p>
          <Social />
          <Blog data={data.data}/>
        </div>
  </div>
)}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
