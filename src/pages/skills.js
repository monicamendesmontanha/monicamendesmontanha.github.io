import React from "react"
import "./scss/skills.scss"
import "devicon/devicon.css"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrello } from "@fortawesome/free-brands-svg-icons"
import { faHeart, faHourglassHalf, faHandsHelping, faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faHeart, faTrello, faHourglassHalf, faHandsHelping, faMobileAlt)

const tools = [
  {
    iconClassName: "devicon-javascript-plain",
    name: "JavaScript"
  },
  {
    iconClassName: "devicon-react-original",
    name: "React"
  },
  {
    iconClassName: "devicon-rails-plain",
    name: "Ruby on Rails"
  },
  {
    iconClassName: "devicon-ruby-plain",
    name: "Ruby"
  },
  {
    iconClassName: "devicon-nodejs-plain",
    name: "Node.js"
  },
  {
    iconClassName: "devicon-express-original",
    name: "Express"
  },
  {
    iconClassName: "devicon-jquery-plain",
    name: "JQuery"
  },
  {
    iconClassName: "devicon-mysql-plain",
    name: "My SQL"
  },
  {
    iconClassName: "devicon-postgresql-plain",
    name: "Postgresql"
  },
  {
    iconClassName: "devicon-mongodb-plain",
    name: "MongoDB"
  },
  {
    iconClassName: "devicon-git-plain",
    name: "Git"
  },
  {
    iconClassName: "devicon-html5-plain",
    name: "HTML"
  },
  {
    iconClassName: "devicon-css3-plain",
    name: "CSS"
  },
  {
    iconClassName: "devicon-sass-original",
    name: "SASS"
  }
];

export default () => (
  <>
    <Menu />
    <h3>TOOLBELT</h3>
    <p className="toolSection">
      {tools.map(tool => (
        <div className="toolTag">
          <i class={tool.iconClassName}></i>{tool.name}
        </div>
      ))}
    </p>


    <h3 className="titleInterestsSection">INTERESTS</h3>
    <div className="interests">
      <div>
        <FontAwesomeIcon className="interestsIcon" icon={faMobileAlt}/>
        Mobile First
      </div>
      <div>
        <FontAwesomeIcon className="interestsIcon" icon={faHeart}/>
        Accessibility
      </div>
      <div>
        <FontAwesomeIcon className="interestsIcon" icon={faTrello}/>
        Planning
      </div>
      <div>
        <FontAwesomeIcon className="interestsIcon" icon={faHourglassHalf}/>
        Productivity
      </div>
      <div>
        <FontAwesomeIcon className="interestsIcon" icon={faHandsHelping} />
        Mentoring
      </div>
    </div>
    <Footer />
  </>
)
