/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { ReactNode } from "react"
import Header from "../header"
import Layout from "../layout"
import MDXStyler from "./mdxStyler"

interface PostPageProps {
  children: ReactNode
}

const postStyles = css`
  margin: 30px auto 0 auto;
  max-width: 900px;
  padding: 0 30px;
  .syntax-highlight {
    padding: 20px;
  }
`

const PostPage: React.FC<PostPageProps> = (props: PostPageProps) => {
  const context = props.pageContext.frontmatter
  return (
    <Layout title="Blog">
      <div>
        <div css={postStyles}>
          <Header />
          <h1>{context.title}</h1>
          <p>{context.date}</p>
          <MDXStyler>{props.children}</MDXStyler>
        </div>
      </div>
    </Layout>
  )
}
export default PostPage
