/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Skill } from "./types"

const resumeSkillStyles = css`
  margin-top: 8px;
  p {
    margin: 0px;
  }
`

export default function ResumeSkillItem({
  skill: { type, list },
}: {
  skill: Skill
}) {
  return (
    <li css={resumeSkillStyles}>
      <p>
        <strong className="skills__type">{type}: </strong>
        {list.join(", ")}
      </p>
    </li>
  )
}
