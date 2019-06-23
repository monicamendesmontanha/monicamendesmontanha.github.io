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
          I'm a junior software engineer. I'm looking for an opportunity in
          Sydney to build my career as a front-end developer.
        </p>

        <p>
          When I set my mind to something I work very hard to achieve it:
          whether it be building a career as a physiotherapist in Brazil, coming
          to Sydney to learn English or my current focus of reskilling as a
          software engineer.
        </p>

        <p>
          Working as a physiotherapist for 7 years, I focused on helping the
          development of children with impairments. I have worked in different
          scenarios like Intensive Care Unit (ICU) at hospitals, hydrotherapy at
          the pool and at clinics at the gymnasium.
        </p>

        <p>
          Realising that I had achieved my goals as a physiotherapist, I decided
          for a career-change trying something that I already admired and hadn't
          had the chance to work as before.
        </p>

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
          course at General Assembly.
        </p>

        <p>
          I love the ever-changing nature of this industry and that{" "}
          <span>
            I am thrilled to have chosen a career path where I will always be
            learning.
          </span>{" "}
          I also love the diversity of the tech community - I feel like I have
          found my people!
        </p>
      </div>

      <div>
        <a className="downloadMyResume"
          href="/resume/ResumeMonicaMendesMontanha.pdf"
          title="Go to Monica Mendes Montanha's resume"
          rel="noopener noreferrer"
          target="_blank"
        >
        <FontAwesomeIcon className="downloadMyResumeIcon" icon={faFileDownload}/>
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
            <FontAwesomeIcon icon={faGithubAlt} className="contactMeSocialIcon" />
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/monicamendesmontanha/"
            title="Go to Monica Mendes Montanha's LikedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="contactMeSocialIcon" />
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
