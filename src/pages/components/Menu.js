import React from "react"
import "../scss/menu.scss"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import {
  faHome,
  faFingerprint,
  faLaptopCode,
  faTools,
  faHandsHelping,
  faEnvelope,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(
  faHome,
  faFingerprint,
  faLaptopCode,
  faTools,
  faHandsHelping,
  faEnvelope,
  faFileDownload,
  fab,
  faLinkedinIn,
  faGithubAlt,
  faTwitter
)

export default () => (
  <>
  <head>
    <title>Monica Mendes Montanha</title>
  </head>
  <div className="menu">

  <div className="social">
      <div className="socialIcon">
        <a
          href="https://github.com/monicamendesmontanha"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithubAlt} className="socialIcon"/>
        </a>
      </div>
      <div className="socialIcon">
        <a
          href="https://www.linkedin.com/in/monicamendesmontanha/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="socialIcon"/>
        </a>
      </div>
      <div className="socialIcon">
        <a
          href="https://twitter.com/monica_mendes_m"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} className="socialIcon"/>
        </a>
      </div>
    </div>

    <div className="navBar">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/about/">
          <FontAwesomeIcon icon={faFingerprint} />
        </Link>
        <Link to="/projects/">
          <FontAwesomeIcon icon={faLaptopCode} />
        </Link>
        <Link to="/skills/">
          <FontAwesomeIcon icon={faTools} />
        </Link>
        <Link to="/techCommunity/">
          <FontAwesomeIcon icon={faHandsHelping} />
        </Link>
    </div>

    <div className="resume">
      <a
        className="resumeIcon"
        href="/resume/ResumeMonicaMendesMontanha.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        CV <FontAwesomeIcon icon={faFileDownload} />
      </a>
    </div>
  </div>
  </>
)
