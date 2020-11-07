/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/layout"

const homeStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  .home__nav {
    display: grid;
    column-gap: 20px;
    grid-template-columns: auto auto auto;
    a {
      color: #000;
    }
  }
`

export default function Home() {
  return (
    <Layout title="Home">
      <div css={homeStyles}>
        <h1>Hi 👋, I'm Shamin</h1>
        <div className="home__nav">
          <Link to="/blog">Blog</Link>
          {/* <a href="/projects">Projects</a> */}
          <a href="https://github.com/shamin">Github</a>
        </div>
      </div>
    </Layout>
  )
}
