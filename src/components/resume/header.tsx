/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { HiOutlineMail } from "react-icons/hi"
import { GrLocation } from "react-icons/gr"
import { AiOutlineLinkedin } from "react-icons/ai"
import { VscGithub } from "react-icons/vsc"
import { CgWebsite } from "react-icons/cg"

const resumeHeaderItemStyles = css`
  a {
    color: inherit;
  }
`

const ResumeHeaderItem = ({ item }) => (
  <li css={resumeHeaderItemStyles}>
    <a rel="noreferrer" target="_blank" href={item.link} className="vertical-center">
      <item.icon className="icon-with-text" size={18} />
      <span>{item.text}</span>
    </a>
  </li>
)

const resumeHeaderStyles = css`
  .resume-header__list {
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  @media print {
    .resume-header__name {
      margin-bottom: 5px;
    }
  }
`

export default function ResumeHeader() {
  const resumeHeaderItems = [
    {
      type: "email",
      icon: HiOutlineMail,
      text: "shamin616@gmail.com",
      link: "mailto:shamin616@gmail.com",
    },
    {
      type: "location",
      icon: GrLocation,
      text: "Kochi, India",
      link:
        "https://www.google.com/maps/place/Kochi,+Kerala/@9.9826809,76.1608497,11z/data=!3m1!4b1!4m5!3m4!1s0x3b080d514abec6bf:0xbd582caa5844192!8m2!3d9.9312328!4d76.2673041",
    },
    {
      type: "linkedin",
      icon: AiOutlineLinkedin,
      text: "shamin-meerankutty",
      link: "https://linkedin.com/in/shamin-meerankutty/",
    },
    {
      type: "github",
      icon: VscGithub,
      text: "shamin",
      link: "https://github.com/shamin",
    },
    {
      type: "website",
      icon: CgWebsite,
      text: "shamin.github.io",
      link: "https://shamin.github.io",
    },
  ]

  return (
    <div css={resumeHeaderStyles}>
      <h1 className="resume-header__name">Shamin Meerankutty</h1>
      <ul className="resume-header__list">
        {resumeHeaderItems.map(item => (
          <ResumeHeaderItem key={item.text} item={item} />
        ))}
      </ul>
    </div>
  )
}
