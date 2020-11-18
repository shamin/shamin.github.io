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
      <p className="education__course">
        <strong>
          {course} - {major}
        </strong>
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        className="education__college"
        href={collegeLink}
      >
        {college}
      </a>
      <div className="education__data">
        <span className="vertical-center">
          <MdDateRange size={18} className="icon-with-text" />
          <p>{timeline}</p>
        </span>
        <span className="vertical-center">
          <GrLocation size={18} className="icon-with-text" />
          <p>{location}</p>
        </span>
      </div>
    </li>
  )
}
