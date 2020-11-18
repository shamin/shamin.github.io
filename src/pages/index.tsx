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
    grid-template-columns: auto auto;
    a {
      color: #000;
    }
  }
  .hand__emoji {
    cursor: grab;
  }
`

export default function Home() {
  return (
    <Layout title="Home">
      <div css={homeStyles}>
        <h1>
          Hi <span className="hand__emoji">👋</span>, I'm Shamin
        </h1>
        <div className="home__nav">
          <Link to="/blog">Blog</Link>
          <a rel="noreferrer" target="_blank" rel="noreferrer" href="https://github.com/shamin">
            Github
          </a>
        </div>
      </div>
    </Layout>
  )
}
