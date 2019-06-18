import React from "react"
import "./scss/contact.scss"
import Menu from "./components/Menu"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faMapMarkerAlt, faEnvelope);


export default () => (
  <>
    <Menu />
    <h3>CONTACT</h3>
    <p>If you have any questions, please don't hesitate to contact using form below...</p>

    <form>
      <input placeholder="Name"></input>
      <input placeholder="Email"></input>
      <input placeholder="Message"></input>
      <button type="submit">Send</button>
    </form>


    <div className="footer">
      <div className="cityFooter">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="cityIcon" />
        Sydney, NSW
      </div>
      <div>•</div>
      <div className="emailFooter">
      <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
      monicamendesmontanha@gmail.com</div>
    </div>
  </>
)