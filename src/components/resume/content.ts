import {
  Education,
  Experience,
  HeaderItem,
  OpenSource,
  Project,
  Skill,
} from "./types"
import { HiOutlineMail } from "react-icons/hi"
import { GrLocation } from "react-icons/gr"
import { AiOutlineLinkedin } from "react-icons/ai"
import { VscGithub } from "react-icons/vsc"
import { CgWebsite } from "react-icons/cg"

export const experiences: Experience[] = [
  {
    role: "Senior Full Stack Engineer & Technical Lead",
    company: "Fullcontact",
    date: "May 2021 - Present",
    location: "Kochi, India",
    companyLink: "https://fullcontact.com",
    responsibilities: [
      "Technical Lead for the Customer Experience team in India. Mentoring the colleagues, helping the new members to onboard faster, Managing internal documentation etc.", 
      "Working on customer facing dashboards and a markdown driven public documentation.",
      "Working on refactoring of a react component library that uses Fullcontact design system. We are also adding new visualisations built with d3.",
      "Working on a javascript tag that customers can put on their website to track visitors. Similar to the google analytics tag."
    ]
  },
  {
    role: "Full Stack Engineer",
    company: "Fullcontact",
    date: "June 2018 - April 2021",
    location: "Kochi, India",
    companyLink: "https://fullcontact.com",
    responsibilities: [
      "Part of a team who built micro services that handle customer accounts, payments, contracts etc. These were written in Clojure backed with technologies like Kafka, Aurora, Druid, Mongo etc. We also build an even driven system with the help of Kafka streams. Frontends were also build to visualise and handle these details.", 
      "Built the complete frontend of an internal application that is used for data cleanup. This application help the team to cleanup almost 1 million datasets per day. Also worked a little on the backend of these systems.",
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Zealmotion",
    date: "August 2017 - May 2018",
    location: "Kochi, India",
    companyLink: "https://zealmotion.com",
    responsibilities: [
      "Worked on a carpooling mobile application written in React native and Express backend. It was a 2 member team and was able to complete the project in 2 months.", 
      "Worked on an admin portal in React.js which handled large datasets.",
      "Designed and developed several responsive websites backed by CMS."
    ]
  }
]

export const skills: Skill[] = [
  {
    type: "Programming Languages",
    list: ["Javascript", "Python", "Clojure"],
  },
  {
    type: "Frontend",
    list: [
      "React",
      "Redux",
      "ES6",
      "CSS3",
      "SASS",
      "Typescript",
      "Webpack",
      "Jest",
      "Enzyme",
      "Vue",
      "Clojurescript",
      "Reagent",
      "CSS-in-JS",
    ],
  },
  {
    type: "Backend",
    list: ["Flask", "Node.js (Express)"],
  },
  {
    type: "Others",
    list: [
      "Graphql",
      "SQL & NoSQL databases",
      "AWS",
      "Git",
      "Microservices",
      "REST API",
      "SQS",
      "Redis",
      "s3",
      "Docker",
      "CI & CD",
    ],
  },
]

export const educations: Education[] = [
  {
    course: "Bachelor of Technology",
    major: "Mechanical Engineering",
    college: "FISAT, Angamaly",
    collegeLink: "http://fisat.ac.in",
    timeline: "2013 - 2017",
    location: "Kerala",
  },
]

export const openSource: OpenSource = {
  projects: [
    {
      name: "Greenboard",
      type: "Gatsby Theme",
      link: "https://github.com/shamin/greenboard",
      description:
        "Gatsby theme for generating api documentation from markdown files. The project was product of the day on Product hunt. It has 224 stars on Github.",
      stacks: ["React", "sass", "Gatsby"],
    },
    {
      name: "React Flow",
      type: "React Package",
      link: "https://github.com/shamin/react-flow",
      description:
        "React package to create drag and drop flow charts.",
      stacks: ["React", "Context API", "Hooks"],
    },
    {
      name: "Figma React Icons",
      type: "CLI",
      link: "https://github.com/shamin/figma-react-icons",
      description:
        "CLI to generate react icon component files from Figma.",
      stacks: ["React", "sass", "Gatsby"],
    },
  ],
  contributions: [
    {
      name: "Kibana",
      link: "https://github.com/elastic/kibana",
      description:
        "Merged 3 PRs to kibana. Two of them were bug fixes and another one was conversion of a package to typescript.",
      stacks: ["svgo", "meow"],
    },
  ],
}

export const sideProjects: Project[] = [
  {
    name: "Postbot",
    type: "Shopify Application",
    description:
      "Built a Shopify application that shows live order pop-ups on Shopify stores.",
    stacks: [
      "React",
      "React hooks",
      "Emotion",
      "Node JS",
      "AWS",
      "Mongo DB",
      "GraphQl",
    ],
    link: "https://postbot.tech",
  },
]

export const resumeHeaderItems: HeaderItem[] = [
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