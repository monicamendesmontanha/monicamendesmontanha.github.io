import React from "react"
import "../scss/footer.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faMapMarkerAlt, faEnvelope)

export default () => (
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
)