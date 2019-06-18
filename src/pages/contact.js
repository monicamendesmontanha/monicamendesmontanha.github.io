import React from "react"
import "./scss/contact.scss"
import Menu from "./components/Menu"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faMapMarkerAlt, faEnvelope)

export default () => (
  <>
    <Menu />
    <h3>CONTACT</h3>
    <p className="textContact">
      If you have any questions, please don't hesitate to contact using form
      below...
    </p>
    <form>
      <div className="nameEmail">
        <input type="text" className="name" placeholder="Name"></input>
        <input type="text" className="email" placeholder="Email"></input>
      </div>
      <div className="message">
        <input type="text" placeholder="Message"></input>
      </div>
      <div className="send">
        <button type="submit">Send</button>
      </div>
    </form>

    <div className="footer">
      <div className="cityFooter">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="cityIcon" />
        Sydney, NSW
      </div>
      <div>•</div>
      <div className="emailFooter">
        <a target="_blank" rel="noopener noreferrer" href="mailto:monicamendesmontanha@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
          <span type="submit">monicamendesmontanha@gmail.com</span>
        </a>
      </div>
    </div>
  </>
)
