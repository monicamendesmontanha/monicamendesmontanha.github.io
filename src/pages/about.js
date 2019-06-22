import React from "react"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./scss/about.scss"
import gravata from "./img/gravata.jpg"

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
          When I set my mind to something I work very hard to achieve it.
          Whether it be building a career as a physiotherapist in Brazil, coming
          to Sydney to learn English or my current focus of reskilling as a
          software engineer.
        </p>

        <p>
          I was a physiotherapist for 7 years, I always have worked helping the
          development of children with impairments. I have worked in different
          scenarios like Intensive Care Unit (ICU) at hospitals, hydrotherapy at
          the pool and at clinics at the gymnasium.
        </p>

        <p>
          At a certain point, I realized that I had achieved my goals as a
          physiotherapist and I decided for a career-change trying something
          that I already admired and I didn't have the chance to work before.
        </p>

        <p>
          I have embedded myself in the Sydney tech industry by attending
          meetups, enrolling in the <a target="_blank" rel="noopener noreferrer" href="https://levelup.thoughtworks.com/about-levelup" >LevelUp</a> program at ThoughtWorks and studying
          the <a target="_blank" rel="noopener noreferrer" href="https://generalassemb.ly/education/software-engineering-immersive/sydney" >Software Engineering Immersive</a> course at General Assembly.
        </p>

        <p>
          I love the ever-changing nature of this industry and that{" "}
          <span>
            {" "}
            I have chosen a career path where I will always be learning.{" "}
          </span>{" "}
          I also love the diversity of the tech community - I feel like I have
          found my people!
        </p>
      </div>
    </div>
    <Footer />
  </div>
)
