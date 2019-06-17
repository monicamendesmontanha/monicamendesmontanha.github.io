import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedinIn, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faFingerprint, faLaptopCode, faProjectDiagram, faEnvelope, faFileDownload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faHome, faFingerprint, faLaptopCode, faProjectDiagram, faEnvelope, faFileDownload, fab, faLinkedinIn, faGithubAlt, faTwitter);

export default () => (
  <>
    <div>
      <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
      <Link to="/about/"><FontAwesomeIcon icon={faFingerprint} /></Link>
      <Link to="/skills/"><FontAwesomeIcon icon={faLaptopCode} /></Link>
      <Link to="/projects/"><FontAwesomeIcon icon={faProjectDiagram} /></Link>
      <Link to="/contact/"><FontAwesomeIcon icon={faEnvelope} /></Link>
    </div>
    <div>
    <a
        href="https://"
        rel="noopener noreferrer"
        target="_blank"
      >
        CV  <FontAwesomeIcon icon={faFileDownload} />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/monicamendesmontanha"
        rel="noopener noreferrer"
        target="_blank"
      >
      <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a
        href="https://www.linkedin.com/in/monicamendesmontanha/"
        rel="noopener noreferrer"
        target="_blank"
      >
      <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://twitter.com/monica_mendes_m"
        rel="noopener noreferrer"
        target="_blank"
      >
      <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </>
)
