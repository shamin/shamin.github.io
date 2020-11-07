/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { ReactNode } from "react"
import Header from "../header"
import Layout from "../layout"
import MDXStyler from "./mdxStyler"

interface PostPageProps {
  children: ReactNode
  pageContext: {
    frontmatter: {
      title: string
      date: string
    }
  }
}

const postStyles = css`
  margin: 30px auto 0 auto;
  max-width: 900px;
  padding: 0 30px 140px 30px;
  .post__content {
    margin-top: 60px;
  }
  .post__heading {
    margin-bottom: 10px;
  }
  .post__date {
    font-size: 14px;
  }
  .syntax-highlight {
    padding: 20px;
    font-family: Consolas,Menlo,Monaco,source-code-pro,Courier New,monospace;
    font-size: 16px;
    line-height: 1.6em;
  }
  code {
    font-family: inherit;
    background: #dedede;
    border-radius: 2px;
    padding: 0 5px;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: #0000ee;
  }
  h1, h2, h3, h4 {
    a {
      color: #000;
    }
  }
`

const PostPage: React.FC<PostPageProps> = (props: PostPageProps) => {
  const context = props.pageContext.frontmatter
  return (
    <Layout title={context.title}>
      <div>
        <div css={postStyles}>
          <Header />
          <div className="post__content">
            <h1 className="post__heading">{context.title}</h1>
            <p className="post__date">{context.date}</p>
            <MDXStyler>{props.children}</MDXStyler>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default PostPage
