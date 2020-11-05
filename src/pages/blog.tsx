/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Layout from "../components/layout"
import Header from "../components/header"
import BlogListItem from "../components/blog/listItem"
import { graphql, useStaticQuery } from "gatsby"

const blogStyles = css`
  margin: 30px auto 0 auto;
  max-width: 900px;
  padding: 0 30px;
`

const blogListStyles = css`
  margin-top: 60px;
`

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
              description
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges

  return (
    <Layout title="Blog">
      <div css={blogStyles}>
        <Header />
        <div css={blogListStyles}>
          {posts.map(({ node }) => (
            <BlogListItem key={node.id} post={node.frontmatter} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
