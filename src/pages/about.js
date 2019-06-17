import React from "react"
import Menu from "./components/Menu"
import "./scss/about.scss"
import gravata from "./img/gravata.jpg"

export default () => (
  <div>
    <Menu />
    <h3>ABOUT ME</h3>
    <div className="aboutMe">
      <div>
        <img
              className="gravata"
              src={gravata}
              alt="Gravata"
              height="400"
              width="600"
            />
      </div>
      <div className="textAboutMe">
        <p>I'm a junior engineer.</p>

        <p>
          When I set my mind to something I work very hard to achieve it. Whether it
          be building a career as a physiotherapist in Brazil, coming to Sydney to
          learn English or my current focus of reskilling as a Software Developer.
        </p>

        <p>
          I have embedded myself in the Sydney tech industry by attending meetups,
          enrolling in the LevelUp program at ThoughtWorks and studying the Software
          Engineering Immersive course at General Assembly.
        </p>

        <p>
          I love the ever-changing nature of this industry and that <span> I have chosen a
          career path where I will always be learning. </span>  I also love the diversity of
          the tech community - I feel like I have found my people!
        </p>
      </div>
    </div>
  </div>
)
