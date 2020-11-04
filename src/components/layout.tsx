/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core"
import SEO from "./seo"

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
  body {
    font-family: "Poppins", sans-serif;
    margin: 0;
  }
`

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <SEO title={props.title} />
      <Global styles={globalStyles} />
      {props.children}
    </div>
  )
}
