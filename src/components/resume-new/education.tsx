/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { MdDateRange } from "react-icons/md"
import { GrLocation } from "react-icons/gr"
import { Education } from "./types"

const resumeEducationStyles = css`
  .education__course {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .education__data {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    p {
      margin: 0;
    }
  }
  .education__college {
    color: inherit;
  }
`

export default function ResumeEducationItem({
  education: { course, major, college, timeline, location, collegeLink },
}: {
  education: Education
}) {
  return (
    <li css={resumeEducationStyles}>
      <p>
        <strong>
          {course} - {major}, {" "}
        </strong>
        2013 - 2017
      </p>
      <p>
        {college}, {location}
      </p>
    </li>
  )
}
