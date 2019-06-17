import React from "react"
import { Link } from "gatsby"

export default () => (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/skills/">Skills</Link>
      <Link to="/projects/">Projects</Link>
      <Link to="/contact/">Contact</Link>
    </div>
    <div>
    <a
        href="https://"
        rel="noopener noreferrer"
        target="_blank"
      >
        CV
      </a>
    </div>
    <div>
      <a
        href="https://github.com/monicamendesmontanha"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/monicamendesmontanha/"
        rel="noopener noreferrer"
        target="_blank"
      >
        LikedIn
      </a>
      <a
        href="https://twitter.com/monica_mendes_m"
        rel="noopener noreferrer"
        target="_blank"
      >
        Twitter
      </a>
    </div>
  </>
)
