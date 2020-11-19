/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Layout from "../components/layout"
import Header from "../components/header"
import { VscGithub } from "react-icons/vsc"
import { CgWebsite } from "react-icons/cg"
import { FiStar } from "react-icons/fi"

const projects = {
  current: [
    {
      name: "Spacekit",
      githubLink: "https://github.com/shamin/space-kit",
      website: "https://space-kit.surge.sh/",
      stars: 0,
      description: "Yet another component library for React.",
    },
    {
      name: "figma-react-icons",
      githubLink: "https://github.com/shamin/figma-react-icons",
      website: null,
      stars: 0,
      description: "CLI to genereate react icon component files from figma.",
    },
    {
      name: "js-dnd",
      githubLink: "https://github.com/shamin/",
      website: null,
      stars: 0,
      description: "Drag and drop in vanilla js.",
    },
  ],
  others: [
    {
      name: "Greenboard",
      githubLink: "",
      website: "",
      stars: 226,
      description: "Gatsby theme for creating beautiful api documentation.",
    },
    {
      name: "webpack sass bootstrap boilerplate",
      githubLink:
        "https://github.com/shamin/webpack-sass-bootstrap-boilerplate",
      website: "https://shamin.github.io/webpack-sass-bootstrap-boilerplate/",
      stars: 67,
      description:
        "Sass, Babel & Bootstrap boilerplate with Webpack building, Dev Server and Live Loading.",
    },
    {
      name: "detector",
      githubLink: "https://github.com/shamin/detector",
      website: "https://github.com/apps/detector-app",
      stars: 8,
      description:
        "A GitHub App built with Probot that helps to track changes to important files.",
    },
    {
      name: "Issue-Finder",
      githubLink: "https://github.com/shamin/Issue-Finder",
      website: null,
      stars: 1,
      description: "Chrome extension to view issues with language and labels.",
    },
    {
      name: "docker-compose",
      githubLink: "https://github.com/shamin/docker-compose",
      website: null,
      stars: 0,
      description: "Spawn up a service locally in 2 steps.",
    },
    {
      name: "react-fullscreen-loading",
      githubLink: "https://github.com/shamin/react-fullscreen-loading",
      website: "https://codesandbox.io/s/v6z782xow7",
      stars: 0,
      description: "Minimal fullscreen loading for react.",
    },
    {
      name: "Alfred whats new workflow",
      githubLink: "https://github.com/shamin/alfred-whats-new-workflow",
      website: null,
      stars: 0,
      description:
        "Alfred workflow which uses Google's whats.new to create something new easily.",
    },
    {
      name: "Chrome extension starter",
      githubLink: "https://github.com/shamin/chrome-extension-starter",
      website: null,
      stars: 0,
      description: "Build a chrome extension with vue js.",
    },
  ],
}

const pageStyles = css`
  margin: 30px auto 0 auto;
  max-width: 900px;
  padding: 0 30px;
  padding-bottom: 200px;
`

const pageContentStyles = css`
  margin-top: 60px;
  h2 {
    margin-top: 60px;
  }
`

const projectGridStyles = css`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
`

const projectCardStyles = css`
  border: 2px solid #000;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    a {
      text-decoration: none;
    }
  }
  a {
    color: inherit;
  }
  .project__desc {
    flex: 1;
    margin: 0;
    margin-bottom: 10px;
  }
  .project__icons {
    display: flex;
    align-items: baseline;
    a {
      margin-right: 15px;
    }
    .flex--1 {
      flex: 1;
    }
  }
  .project__icons__stars {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      margin-left: 5px;
      padding-top: 2px;
    }
  }
`

export default function Projects() {
  return (
    <Layout title="Projects">
      <div css={pageStyles}>
        <Header />
        <div css={pageContentStyles}>
          <h1>My projects</h1>
          <div>
            <h2>What I am currently working on.</h2>
            <div css={projectGridStyles}>
              {projects.current.map(p => (
                <div key={p.name} css={projectCardStyles}>
                  <h4>
                    <a rel="noreferrer" target="_blank" href={p.githubLink}>
                      {p.name}
                    </a>
                  </h4>
                  <p className="project__desc">{p.description}</p>
                  <div className="project__icons">
                    <a rel="noreferrer" target="_blank" href={p.githubLink}>
                      <VscGithub />
                    </a>
                    {p.website && (
                      <a rel="noreferrer" target="_blank" href={p.website}>
                        <CgWebsite />
                      </a>
                    )}
                    <div className="flex--1"></div>
                    {p.stars > 5 && (
                      <span className="project__icons__stars">
                        <FiStar />
                        <p>{p.stars}</p>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <h2>Other projects.</h2>
            <div css={projectGridStyles}>
              {projects.others.map(p => (
                <div key={p.name} css={projectCardStyles}>
                  <h4>
                    <a rel="noreferrer" target="_blank" href={p.githubLink}>
                      {p.name}
                    </a>
                  </h4>
                  <p className="project__desc">{p.description}</p>
                  <div className="project__icons">
                    <a rel="noreferrer" target="_blank" href={p.githubLink}>
                      <VscGithub />
                    </a>
                    {p.website && (
                      <a rel="noreferrer" target="_blank" href={p.website}>
                        <CgWebsite />
                      </a>
                    )}
                    <div className="flex--1"></div>
                    {p.stars > 5 && (
                      <span className="project__icons__stars">
                        <FiStar size={16} />
                        <p>{p.stars}</p>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
