/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { HeaderItem } from "./types"

const resumeHeaderItemStyles = css`
  /* @media only screen and (max-width: 800px) {
    margin-top: 5px;
  } */
  a {
    color: inherit;
    span {
      margin-left: 2px;
    }
  }
`

const ResumeHeaderItem = ({ item }: { item: HeaderItem }) => (
  <li css={resumeHeaderItemStyles}>
    <a
      rel="noreferrer"
      target="_blank"
      href={item.link}
      className="vertical-center"
    >
      <item.icon className="icon-with-text" size={18} />
      <span>{item.text}</span>
    </a>
  </li>
)

const resumeHeaderStyles = css`
  .resume-header__name {
    text-align: center;
    margin-bottom: 12px;
  }
  .resume-header__list {
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  @media only screen and (max-width: 800px) {
  }
  @media print {
  }
`

export default function ResumeHeader({
  headerItems,
}: {
  headerItems: HeaderItem[]
}) {
  return (
    <div css={resumeHeaderStyles}>
      <h1 className="resume-header__name">Shamin Meerankutty</h1>
      <ul className="resume-header__list">
        {headerItems.map(item => (
          <ResumeHeaderItem key={item.text} item={item} />
        ))}
      </ul>
    </div>
  )
}
