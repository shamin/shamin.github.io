/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const resumeProjectStyles = css`
  margin-top: 15px;
  .project__heading {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .project__description {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .project__stacks {
    margin: 0px;
  }
  @media print {
    margin-top: 5px;
  }
`

export default function ResumeProjectItem({
  project: { name, type, link, description, stacks },
}) {
  return (
    <li css={resumeProjectStyles}>
      <h3 className="project__heading">
        {name}
        {type && <span>, {type}</span>}
      </h3>
      <a target="_blank" href={link}>
        {link}
      </a>
      <p className="project__description">{description}</p>
      <p className="project__stacks">
        <strong>Stacks Used : </strong>
        {stacks.join(", ")}
      </p>
    </li>
  )
}
