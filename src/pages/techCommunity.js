import React from "react"
import "./scss/techCommunity.scss"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

import NodeGirls18Nov2017 from "./img/NodeGirls18Nov2017.jpg"
import CodingDojo08Mar18 from "./img/CodingDojo08Mar18.png"
import NodeGirls05May2018 from "./img/NodeGirls05May2018.jpg"
import NodeGirls12Sep2018 from "./img/NodeGirls12Sep2018.jpg"
import CodingDojo13Sep2018 from "./img/CodingDojo13Sep2018.jpg"
import SoftwareCrafters21Sep2018 from "./img/SoftwareCrafters21Sep2018.jpg"
import CodingDojo27Sep2018 from "./img/CodingDojo27Sep2018.jpg"
import CodingDojo11Oct2018 from "./img/CodingDojo11Oct2018.jpg"
import LevelUpShowcaseWatchEdition from "./img/LevelUpShowcaseWatchEdition.jpg"
import CodingDojo25oct2018 from "./img/CodingDojo25oct2018.jpg"
import LevelUpTW from "./img/LevelUpTW.jpg"
import CodingDojo08Nov2018 from "./img/CodingDojo08Nov2018.jpg"
import SoftwareCrafters30Nov2018 from "./img/SoftwareCrafters30Nov2018.jpg"
import Musesjs11May2019 from "./img/Musesjs11May2019.jpg"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faMeetup } from "@fortawesome/free-brands-svg-icons"
import { faCode, faUsersCog, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add( faMeetup, faCode, faUsersCog, faChalkboardTeacher )

export default () => (
  <>
    <Menu />
    <h3>TECH COMMUNITY</h3>
    <div className="techCommunity">

      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={NodeGirls18Nov2017}
          alt="Node Girls MeetUp"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="meetupIcon"/>Node Girls - 18 Nov, 2017</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={CodingDojo08Mar18}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="meetupIcon"/>Coding Dojo - 08 Mar, 2018</p>
      </div>



      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={NodeGirls05May2018}
          alt="Node Girls MeetUp"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="meetupIcon"/>Node Girls - 05 May, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={NodeGirls12Sep2018}
          alt="Node Girls MeetUp"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="meetupIcon"/>Node Girls  - 12 Sep, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={CodingDojo13Sep2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="meetupIcon"/>Coding Dojo  - 13 Sep, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={SoftwareCrafters21Sep2018}
          alt="Software Crafters MeetUp"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="meetupIcon"/>Software Crafters - 21 Sep, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={CodingDojo27Sep2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="meetupIcon"/>Coding Dojo  - 27 Sep, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={CodingDojo11Oct2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="meetupIcon"/>Coding Dojo  - 11 Oct, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={LevelUpTW}
          alt="LevelUp program at ThoughtWorks"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="meetupIcon"/>LevelUp at ThoughtWorks - Oct, 2018 </p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={LevelUpShowcaseWatchEdition}
          alt="Showcase Watch Edition at ThoughtWorks"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="meetupIcon"/>Showcase Watch Edition - Oct, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={CodingDojo25oct2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="meetupIcon"/>Coding Dojo  - 25 Oct, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={CodingDojo08Nov2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="meetupIcon"/>Coding Dojo  - 08 Nov, 2018</p>
      </div>


      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={SoftwareCrafters30Nov2018}
          alt="Software Crafters MeetUp"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="meetupIcon"/>Software Crafters - 30 Nov, 2018</p>
      </div>



      <div className="techCommunityItem">
        <img
          className="techCommunityPicture"
          src={Musesjs11May2019}
          alt="Node Girls MeetUp"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="meetupIcon"/>Muses JS - 11 May, 2019</p>
      </div>

    </div>

    <Footer />
  </>
)
