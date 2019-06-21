import React from "react"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./scss/index.scss"

export default () => (
  <>
    <Menu />
    <div className="main">
      <p>
        "I am always looking for the next step, a different world to go into,
        areas where I have not been before."
      </p>
      <h1>Monica Mendes Montanha</h1>
      {/* <h1>
        <span class="glitch" data-text="Monica">
        Monica{" "}
        </span>
        <span class="glitch" data-text="Mendes">
        Mendes
        </span>{" "}
        <span class="glitch" data-text="Montanha">
        Montanha
        </span>
      </h1> */}
      {/* <h2>Junior Software Engineer</h2> */}

      <h2>
        <span class="glitch" data-text="Junior">
          Junior{" "}
        </span>
        <span class="glitch" data-text="Software">
          Software
        </span>{" "}
        <span class="glitch" data-text="Engineer">
          Engineer
        </span>
      </h2>

      <Footer />
    </div>
  </>
)
