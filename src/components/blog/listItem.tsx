/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

interface Post {
  title: string
  path: string
  date: string
  description: string
}

const blogListItemStyles = css`
  margin-top: 50px;
  .blog-list-item__heading {
    margin-bottom: 10px;
    a {
      text-decoration: none;
      color: #000;
    }
  }
  .blog-list-item__desc {
    margin-top: 0;
  }
  .blog-list-item__date {
    font-size: 14px;
  }
`

interface BlogListItemProps {
  post: Post
}

export default function BlogListItem({ post }: BlogListItemProps) {
  return (
    <div css={blogListItemStyles} className="blog-list-item">
      <h1 className="blog-list-item__heading">
        <Link to={post.path}>{post.title}</Link>
      </h1>
      <p className="blog-list-item__date">{post.date}</p>
      <p className="blog-list-item__desc">{post.description}</p>
    </div>
  )
}
