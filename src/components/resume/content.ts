export const experiences = [
  {
    role: "Full Stack Engineer",
    company: "Fullcontact",
    date: "June 2018 - Present",
    location: "Kochi, India",
    companyLink: "https://fullcontact.com",
    projects: [
      {
        title: "Fullcontact Dashboard",
        description:
          "Worked on the revamp of fullcontact dashboard. This included a new design, features like usage stats, match test, new billing page, etc. Being the first member of the revamp team I mentored 6 of my teammates in India. Stacks used were Clojurescript, Clojure and React.",
      },
      {
        title: "Wheatley",
        description:
          "Worked on an internal dashboard to view and update customer information such as plans, payments, etc. Work was mainly on UI, the backend was a middleware which talks to other microservices.",
      },
      {
        title: "Plans & Payment services",
        description:
          "This includes the microservices used by dashboard and wheatley. There are 8 microservices each specialise one task like handling usage info, event-driven for async tasks, handling payments, handling plans, handling accounts, handling third-party systems, etc. All these services are written from scratch. They are highly scalable and stable with the help of Kafka and Druid. The stacks used are Clojure, Kafka, Kafka streams, Memcached, Mongo, Druid and Mysql.",
      },
      {
        title: "Suitescripts",
        description:
          "These are Javascript files that run inside Netsuite. Due to the less bandwidth, I had to do this alone. Figured out entirely myself and came up with a typescript project which can be easily deployed to Netsuite with cli.",
      },
      {
        title: "Aquifer",
        description:
          "Worked on the frontend of internal app used by data team to visualize and deduplicate data. Have worked on some advanced react concepts like higher-order components. This was a Javascript project.",
      },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Zealmotion",
    date: "August 2017 - May 2018",
    location: "Kochi, India",
    companyLink: "https://zealmotion.com",
    projects: [
      {
        title: "Convoy",
        description:
          "Carpooling mobile application written in React Native and backend in Node js. It was a 2 member team and had to complete the project in 2 months. Also developed an admin portal in React.",
      },
      {
        title: "Kudumbashree Admin Portal",
        description:
          "Kudumbashree is one of the largest SHG in Asia and they needed an admin portal to manage procurements. I have worked on the UI in Vue js.",
      },
      {
        description:
          "Designed and developed several responsive websites powered with CMS backend.",
      },
    ],
  },
]

export const skills = [
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
      "REST Api",
      "SQS",
      "Redis",
      "s3",
      "Docker",
      "CI & CD",
    ],
  },
]

export const educations = [
  {
    course: "Bachelor of Technology",
    major: "Mechanical Engineering",
    college: "Federal Institute of Science and Technology",
    collegeLink: "http://fisat.ac.in",
    timeline: "2013 - 2017",
    location: "Angamaly, Kerala",
  },
]

export const openSource = {
  projects: [
    {
      name: "Greenboard",
      type: "Gatsby Theme",
      link: "https://github.com/shamin/greenboard",
      description:
        "Greenboard is a gatsby theme for creating api documentation from a markdown file, similar to slate. Slate was basic and was harder to customize. So I developed a theme that takes markdown file parse it to html ast and is then rendered as html files. The project got an amazing response and got the product of the day in producthunt. It has 224 stars on Github.",
      stacks: ["React", "sass", "Gatsby"],
    },
  ],
  contributions: [
    {
      name: "Kibana",
      link: "https://github.com/elastic/kibana",
      description:
        "Merged 3 PRs to kibana. Two of them where bug fixes and another on was conversion of a package to typescript.",
      stacks: ["Typescript", "React", "Redux"],
    },
  ],
}

export const sideProjects = [
  {
    name: "Postbot",
    type: "Shopify Application",
    description:
      "Built a shopify application that shows liveorder pop-ups on shopify stores. Shopify polaris, App Bridge and GraphQl api was used.",
    stacks: ["React", "React hooks", "Emotion", "Node JS", "AWS", "Mongo DB", "GraphQl"],
    link: "https://postbot.tech",
  },
  {
    name: "Webpack Boilerplate",
    description:
      "Created a webpack boilerplate that can be used to start a small website. This boilerplate also adds sass, es6 functionality to your environment.",
    stacks: ["Webpack", "sass"],
    link: "https://github.com/shamin/webpack-sass-bootstrap-boilerplate",
  },
]
