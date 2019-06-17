import React from "react"
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
    <div>
      <div>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        Sydney, NSW
      </div>
      <div>
      <FontAwesomeIcon icon={faEnvelope} />
      monicamendesmontanha@gmail.com</div>
    </div>
  </>
)