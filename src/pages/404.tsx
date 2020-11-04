/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Layout from "../components/layout"

const homeStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default function Home() {
  return (
    <Layout title="Home">
      <div css={homeStyles}>
        <h1>🤔 404</h1>
      </div>
    </Layout>
  )
}
