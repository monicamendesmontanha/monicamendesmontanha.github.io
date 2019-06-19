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
    <p className="skillsSection">
      <div className="skillTag">Javascript</div>
      <div className="skillTag">React</div>
      <div className="skillTag">Ruby</div>
      <div className="skillTag">Ruby on Rails</div>
      <div className="skillTag">Express</div>
      <div className="skillTag">Node.js</div>
      <div className="skillTag">JQuery</div>
      <div className="skillTag">Graphql</div>
      <div className="skillTag">Git</div>
      <div className="skillTag">SQL</div>
      <div className="skillTag">HTML 5</div>
      <div className="skillTag">CSS 3</div>
      <div className="skillTag">SASS</div>


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
