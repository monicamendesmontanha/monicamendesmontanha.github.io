import React from "react"
import "./scss/skills.scss"
import "devicon/devicon.css"
import "devicon/devicon-colors.css"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrello } from "@fortawesome/free-brands-svg-icons"
import { faHeart, faHourglassHalf, faHandsHelping, faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faHeart, faTrello, faHourglassHalf, faHandsHelping, faMobileAlt)

const tools = [
  {
    iconClassName: "devicon-javascript-plain colored",
    name: "JavaScript"
  },
  {
    iconClassName: "devicon-react-original colored",
    name: "React"
  },
  {
    iconClassName: "devicon-ruby-plain colored",
    name: "Ruby"
  },
  {
    iconClassName: "devicon-rails-plain colored",
    name: "Rails"
  },
  {
    iconClassName: "devicon-nodejs-plain colored",
    name: "Node.js"
  },
  {
    iconClassName: "devicon-express-original colored",
    name: "Express"
  },
  {
    iconClassName: "devicon-jquery-plain colored",
    name: "JQuery"
  },
  {
    iconClassName: "devicon-postgresql-plain colored",
    name: "Postgresql"
  },
  {
    iconClassName: "devicon-mysql-plain colored",
    name: "My SQL"
  },
  {
    iconClassName: "devicon-mongodb-plain colored",
    name: "MongoDB"
  },
  {
    iconClassName: "devicon-git-plain colored",
    name: "Git"
  },
  {
    iconClassName: "devicon-html5-plain colored",
    name: "HTML"
  },
  {
    iconClassName: "devicon-css3-plain colored",
    name: "CSS"
  },
  {
    iconClassName: "devicon-sass-original colored",
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
          <i className={`${tool.iconClassName} toolIcon`}></i>
          {tool.name}
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
