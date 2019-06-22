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
    <h3>TOOLBELT</h3>
    <p className="toolSection">
      <div className="toolTag">JavaScript</div>
      <div className="toolTag">React</div>
      <div className="toolTag">Ruby on Rails</div>
      <div className="toolTag">Ruby</div>
      <div className="toolTag">Node.js</div>
      <div className="toolTag">Express</div>
      <div className="toolTag">JQuery</div>
      <div className="toolTag">Graphql</div>
      <div className="toolTag">SQL</div>
      <div className="toolTag">MongoDB</div>
      <div className="toolTag">Mobile First</div>
      <div className="toolTag">Git</div>
      <div className="toolTag">HTML 5</div>
      <div className="toolTag">CSS 3</div>
      <div className="toolTag">SASS</div>

    </p>
    <h3 className="titleInterestsSection">INTERESTS</h3>
    <div className="interests">
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
