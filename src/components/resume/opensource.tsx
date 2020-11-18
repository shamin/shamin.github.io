/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Project } from "./types"

const resumeOpenSourceStyles = css`
  .opensource__heading {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .opensource__description {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .opensource__stacks {
    margin: 0px;
  }
  .opensource__type {
    font-size: 0.8em;
    font-weight: 400;
  }
`

export default function ResumeOpenSourceItem({
  data: { name, type = "", link, description, stacks },
}: {
  data: Project
}) {
  return (
    <li css={resumeOpenSourceStyles}>
      <h3 className="opensource__heading">
        {name}
        {type && <span className="opensource__type">, {type}</span>}
      </h3>
      <a rel="noreferrer" target="_blank" href={link}>
        {link}
      </a>
      <p className="opensource__description">{description}</p>
      <p className="opensource__stacks">
        <strong>Stacks Used: </strong>
        {stacks.join(", ")}
      </p>
    </li>
  )
}
