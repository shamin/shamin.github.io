/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Project } from "./types"

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
  .project__type {
    font-size: 0.8em;
    font-weight: 400;
  }
  @media print {
    margin-top: 5px;
  }
`

export default function ResumeProjectItem({
  project: { name, type, link, description, stacks },
}: {
  project: Project
}) {
  return (
    <li css={resumeProjectStyles}>
      <h3 className="project__heading">
        <a rel="noreferrer" target="_blank" href={link}>
          {name}
          {type && <span className="project__type">, {type}</span>}
        </a>
      </h3>
      <p className="project__description">{description}</p>
      <p className="project__stacks">
        <strong>Stacks Used : </strong>
        {stacks.join(", ")}
      </p>
    </li>
  )
}
