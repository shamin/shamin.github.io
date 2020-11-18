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
} from "../components/resume/content"
import ResumeEducationItem from "../components/resume/education"
import ResumeExperienceItem from "../components/resume/experience"
import ResumeHeader from "../components/resume/header"
import ResumeOpenSourceItem from "../components/resume/opensource"
import ResumeProjectItem from "../components/resume/project"
import ResumeSection from "../components/resume/section"
import ResumeSkillItem from "../components/resume/skill"

const resumeStyles = css`
  max-width: 1200px;
  display: block;
  margin: 0 auto;
  padding: 40px 20px;
  .two-col {
    display: flex;
    .content__left {
      flex: 0 0 750px;
      margin-right: 20px;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .vertical-center {
    display: flex;
    align-items: center;
  }
  .icon-with-text {
    margin-right: 5px;
  }
  a {
    color: inherit;
  }
  .print__footer {
    display: none;
    position: fixed;
    bottom: 10px;
  }

  @media only screen and (max-width: 800px) {
    .two-col {
      flex-direction: column;
    }
  }

  @media print {
    font-size: 12px;
    padding: 20px 40px 0px 40px;
    .two-col {
      display: flex;
      .content__left {
        flex: 0 0 460px;
        margin-right: 20px;
      }
    }
    hr {
      margin-top: 0;
    }
    .print__footer {
      display: block;
    }
  }
`

export default function Resume() {
  return (
    <Layout title="Resume">
      <GithubCorner
        link={
          "https://github.com/shamin/shamin.github.io/blob/master/src/pages/resume.tsx"
        }
      />
      <div css={resumeStyles}>
        <ResumeHeader />
        <div className="two-col">
          <div className="content__left">
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
            <ResumeSection title="Open Source Projects">
              <ul>
                {openSource.projects.map(project => (
                  <ResumeOpenSourceItem key={project.name} data={project} />
                ))}
              </ul>
            </ResumeSection>
          </div>
          <div>
            <ResumeSection title="Skills & Abilities">
              <ul>
                {skills.map(skill => (
                  <ResumeSkillItem key={skill.type} skill={skill} />
                ))}
              </ul>
            </ResumeSection>
            <ResumeSection title="Education">
              <ul>
                {educations.map(education => (
                  <ResumeEducationItem
                    key={education.course}
                    education={education}
                  />
                ))}
              </ul>
            </ResumeSection>
            <ResumeSection title="Open Source Contributions">
              <ul>
                {openSource.contributions.map(contribution => (
                  <ResumeOpenSourceItem
                    key={contribution.name}
                    data={contribution}
                  />
                ))}
              </ul>
            </ResumeSection>
            <ResumeSection title="Other Projects">
              <ul>
                {sideProjects.map(project => (
                  <ResumeProjectItem key={project.name} project={project} />
                ))}
              </ul>
            </ResumeSection>
            {/* <ResumeSection title="Achievements & Awards">
              <ul>Top 10 opensource contributer in Issuehunt Fest 2018</ul>
            </ResumeSection> */}
          </div>
        </div>
        <footer className="print__footer">
          <p>
            You can view the html version of this resume at{" "}
            <a rel="noreferrer" href="https://shamin.github.io/resume">
              shamin.github.io/resume
            </a>
          </p>
        </footer>
      </div>
    </Layout>
  )
}
