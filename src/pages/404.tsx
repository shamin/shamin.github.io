/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/layout"

const errorPageStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  .error-page__nav {
    display: grid;
    column-gap: 20px;
    grid-template-columns: auto auto;
    a {
      color: #000;
    }
  }
`

export default function ErrorPage() {
  return (
    <Layout title="404">
      <div css={errorPageStyles}>
        <h1>🤔 404</h1>
        <div className="error-page__nav">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </Layout>
  )
}
