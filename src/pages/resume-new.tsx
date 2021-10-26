/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import GithubCorner from "../components/githubCorner"
import Layout from "../components/layout"
import {
  educations,
  experiences,
  skills,
  openSource,
  sideProjects,
  resumeHeaderItems,
} from "../components/resume/content"
import ResumeEducationItem from "../components/resume-new/education"
import ResumeExperienceItem from "../components/resume-new/experience"
import ResumeHeader from "../components/resume-new/header"
import ResumeOpenSourceItem from "../components/resume/opensource"
import ResumeProjectItem from "../components/resume/project"
import ResumeSection from "../components/resume-new/section"
import ResumeSkillItem from "../components/resume/skill"

const resumeStyles = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  width: 900px;
  margin: 0 auto;
  color: #37352f;

  h1,
  h2,
  h3 {
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0;
  }

  h1 {
    font-size: 1.875rem;
    margin-top: 1.875rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  header .name {
    text-align: center;
    font-size: 2rem;
  }

  .vertical-center {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
  }

  @media print {
  }
`

export default function Resume() {
  return (
    <div css={resumeStyles}>
      <ResumeHeader headerItems={resumeHeaderItems} />
      <ResumeSection title="Education">
        <ul>
          {educations.map(education => (
            <ResumeEducationItem key={education.course} education={education} />
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection title="Experience">
        <ul>
          {experiences.map(experience => (
            <ResumeExperienceItem
              key={experience.company}
              experience={experience}
            />
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection title="Open Source Contributions">
        <ul>
          {openSource.contributions.map(contribution => (
            <ResumeOpenSourceItem key={contribution.name} data={contribution} />
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection title="Personal Projects">
        <ul>
          {sideProjects.map(project => (
            <ResumeProjectItem key={project.name} project={project} />
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection title="Open Source Projects">
        <ul>
          {openSource.projects.map(project => (
            <ResumeOpenSourceItem key={project.name} data={project} />
          ))}
        </ul>
      </ResumeSection>
      <ResumeSection title="Achievements & Awards">
        <ul>
          <li>
            Won second prize in Hack & Slash hackathon conducted by{" "}
            <a href="https://dgraph.io/">Dgraph.</a>
          </li>
          <li>
            Winner of{" "}
            <a href="https://redislabs.com/blog/build-on-redis-hackathon-winners">
              Redis labs hackathon
            </a>{" "}
            2021
          </li>
        </ul>
      </ResumeSection>
    </div>
  )
}
