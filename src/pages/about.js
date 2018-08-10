import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <div id="about" className="container">
    <div className="contents">
      <div className="row">
        <div className="col-12">
          <h2 className="heading">Something About Me.</h2>
          <p>I am a full stack developer from Kerala, India, currently working as a developer in
              Fullcontact. I have experience in both Web and Mobile Technologies.
              My technology stack includes <u>React Js, Vue Js, Html5, Css3 and jQuery</u> in
              front-end development, <u>Laravel, Django, and Node Js</u> in backend development, <u>Android
              SDK (Java & Kotlin) and React Native</u> in android app development and React Native
              for ios development. My favorite IDE's are <u>VS Code, Atom, Android Studio and
              Webstorm</u>.</p>
          <Link to="/contact"><a className="link">have a project?</a></Link>
        </div>
      </div>
    </div>
  </div>
)

export default About
