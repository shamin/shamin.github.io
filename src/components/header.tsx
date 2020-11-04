/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

const headerStyles = css`
  font-size: 40px;
  a {
    text-decoration: none;
  }
`

export default function Header() {
  return (
    <div css={headerStyles}>
      <Link to="/">🏠</Link>
    </div>
  )
}
