/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const resumeSkillStyles = css`
  margin-top: 8px;
  p {
    margin: 0px;
  }
`

export default function ResumeSkillItem({ skill: { type, list } }) {
  return (
    <li css={resumeSkillStyles}>
      <p>
      <strong className="skills__type">{type}: </strong>
        {list.join(", ")}
      </p>
    </li>
  )
}
