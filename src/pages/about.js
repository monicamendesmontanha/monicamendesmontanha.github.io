import React from "react"
import { Link } from "gatsby"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./scss/about.scss"
import gravata from "./img/gravata.jpg"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faFileDownload, faLinkedinIn, faGithubAlt, faTwitter)

export default () => (
  <div>
    <Menu />
    <h3>ABOUT ME</h3>
    <div className="aboutMe">
      <div className="img">
        <img className="gravata" src={gravata} alt="Gravata" />
      </div>

      <div className="textAboutMe">
        <p>
          I love the ever-changing nature of this industry and that{" "}
          <span>
            I am thrilled to have chosen a career path where I will always be
            learning.
          </span>{" "}
          I also love the diversity of the tech community - I feel like I have
          found my people!
        </p>

        <p>I'm a former physiotherapist that decided to change career to became a software engineer.</p>
        <p>
          I have embedded myself in the Sydney tech industry by attending{" "}
          <Link to="/techCommunity/">meetups</Link>, enrolling in the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://levelup.thoughtworks.com/about-levelup"
          >
            LevelUp
          </a>{" "}
          program at ThoughtWorks and studying the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://generalassemb.ly/education/software-engineering-immersive/sydney"
          >
            Software Engineering Immersive
          </a>{" "}
          course at General Assembly, starting my first position as a junior software engineer right after.
        </p>
      </div>

      <div>
        <a
          className="downloadMyResume"
          href="/resume/Resume-MonicaMendesMontanha.pdf"
          title="Go to Monica Mendes Montanha's resume"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            className="downloadMyResumeIcon"
            icon={faFileDownload}
          />
          Download My Resume
        </a>
      </div>

      <div className="contactMeSocial">
        <div>
          <a
            href="https://github.com/monicamendesmontanha"
            title="Go to Monica Mendes Montanha's GitHub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithubAlt}
              className="contactMeSocialIcon"
            />
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/monicamendesmontanha/"
            title="Go to Monica Mendes Montanha's LikedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="contactMeSocialIcon"
            />
          </a>
        </div>

        <div>
          <a
            href="https://twitter.com/monica_mendes_m"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} className="contactMeSocialIcon" />
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)
