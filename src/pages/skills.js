import React from "react"
import "./scss/skills.scss"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
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
      <div className="tag">Javascript</div>
      <div className="tag">React</div>
      <div className="tag">Ruby</div>
      <div className="tag">Ruby on Rails</div>
      <div className="tag">Express</div>
      <div className="tag">Node.js</div>
      <div className="tag">JQuery</div>
      <div className="tag">Graphql</div>
      <div className="tag">Git</div>
      <div className="tag">SQL</div>
      <div className="tag">HTML 5</div>
      <div className="tag">CSS 3</div>
      <div className="tag">SASS</div>


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
    <Footer />
  </>
)
