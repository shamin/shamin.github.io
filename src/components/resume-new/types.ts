import { IconType } from "react-icons/lib"

interface ExperienceProject {
  title?: string
  description: string
}

export interface Experience {
  role: string
  company: string
  date: string
  location: string
  companyLink: string
  responsibilities: string[]
}

export interface Skill {
  type: string
  list: string[]
}

export interface Education {
  course: string
  major: string
  college: string
  collegeLink: string
  timeline: string
  location: string
}

export interface Project {
  name: string
  type?: string
  link: string
  description: string
  stacks: string[]
}

export interface OpenSource {
  projects: Project[]
  contributions: Project[]
}

export interface HeaderItem {
  type: string
  icon: IconType
  text: string
  link: string
}
