/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { MdDateRange } from "react-icons/md"
import { GrLocation } from "react-icons/gr"

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
  experience: { role, company, companyLink, date, location, projects },
}) {
  return (
    <li css={resumeExperienceStyles}>
      <h3 className="experience__role">{role}</h3>
      <h4 className="experience__company">
        <a rel="noreferrer" target="_blank" href={companyLink}>
          {company}
        </a>
      </h4>
      <div className="experience__data">
        <span className="vertical-center">
          <MdDateRange size={18} className="icon-with-text" />
          <p>{date}</p>
        </span>
        <span className="vertical-center">
          <GrLocation size={18} className="icon-with-text" />
          <p>{location}</p>
        </span>
      </div>
      <ul className="experience__list">
        {projects.map(project => (
          <li key={project.description} className="experience__list__item">
            {project.title && (
              <strong className="skills__type">{project.title}: </strong>
            )}
            {project.description}
          </li>
        ))}
      </ul>
    </li>
  )
}
