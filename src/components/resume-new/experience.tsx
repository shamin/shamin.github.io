/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { MdDateRange } from "react-icons/md"
import { GrLocation } from "react-icons/gr"
import { Experience } from "./types"

const resumeExperienceStyles = css`
  .experience__role {
    margin-bottom: 0;
  }
  .experience__company {
    margin: 0;
    padding-top: 5px;
    a {
      color: inherit;
    }
  }
  .experience__data {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 5px;
    margin-right: 20px;
    p {
      margin: 0;
    }
  }
  .experience__list {
    list-style: disc;
    margin-left: 24px;
  }
  .experience__list__item {
    margin-top: 5px;
  }
  @media print {
    .experience__role {
      margin-top: 5px;
    }
    .experience__company {
      padding-top: 3px;
    }
    .experience__data {
      padding-top: 5px;
      padding-bottom: 3px;
    }
    .experience__list__item {
      margin-top: 2px;
    }
  }
`

export default function ResumeExperienceItem({
  experience: { role, company, companyLink, date, location, responsibilities },
}: {
  experience: Experience
}) {
  return (
    <li css={resumeExperienceStyles}>
      <h3 className="experience__role"><strong>{role},</strong> {company}, {date}</h3>
      <ul className="experience__list">
        {responsibilities.map(responsibility => (
          <li key={responsibility} className="experience__list__item">
            {responsibility}
          </li>
        ))}
      </ul>
    </li>
  )
}
