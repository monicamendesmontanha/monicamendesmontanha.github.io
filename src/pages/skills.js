import React from "react"
import "./scss/skills.scss"
import Menu from "./components/Menu"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrello } from "@fortawesome/free-brands-svg-icons"
import { faHeart, faHourglassHalf, faHandsHelping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faHeart, faTrello, faHourglassHalf, faHandsHelping)

export default () => (
  <>
    <Menu />
    <h3>SKILLS</h3>
    <p className="skills">
      Javascript React Ruby Ruby on Rails Express Node.js JQuery Graphql HTML 5
      CSS 3 SASS
    </p>
    <h3>INTERESTS</h3>
    <div className="interests">
      <div>
        <FontAwesomeIcon icon={faHeart} className="interestsIcon"/>
        Accessibility
      </div>
      <div>
        <FontAwesomeIcon icon={faTrello} className="interestsIcon"/>
        Planning
      </div>
      <div>
        <FontAwesomeIcon icon={faHourglassHalf} className="interestsIcon"/>
        Productivity
      </div>
      <div>
        <FontAwesomeIcon icon={faHandsHelping}className="interestsIcon" />
        Mentoring
      </div>
    </div>
  </>
)
