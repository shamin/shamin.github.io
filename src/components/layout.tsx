/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core"
import SEO from "./seo"

const globalStyles = css`
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
