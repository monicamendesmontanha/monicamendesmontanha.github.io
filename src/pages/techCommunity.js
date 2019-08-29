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
import GA10Apr2019 from "./img/GA10Apr2019.jpg"
import Musesjs11May2019 from "./img/Musesjs11May2019.jpg"
import SheHacks13July2019 from "./img/SheHacks13July2019.jpeg"
import ContainerCamp2526July2019 from "./img/ContainerCamp2526July2019.jpeg"
import Musesjs10Aug2019 from "./img/Musesjs10Aug2019.jpg"
import ReactMeetup01Jul2019 from "./img/ReactMeetup01Jul2019.jpg"
import ServerlessDaysSydney27Aug2019 from "./img/ServerlessDaysSydney27Aug2019.png"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faMeetup } from "@fortawesome/free-brands-svg-icons"
import { faCode, faUsersCog, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add( faMeetup, faCode, faUsersCog, faChalkboardTeacher )

export default () => (
  <>
    <Menu />
    <h3>TECH COMMUNITY</h3>
    <p className="techCommunitySentence">Here are a few of the events, meetups and programs I've been involved in over the past 2 years in the Sydney tech community.</p>
    <div className="techCommunity">

    <div className="techCommunityItem">
      <span className="eventDate">27 AUG 2019</span>
        <img
          className="techCommunityPicture"
          src={ServerlessDaysSydney27Aug2019}
          alt="Serverless Days Sydney"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="eventIcon"/>#ServerlessDays` Sydney Team</p>
      </div>


    <div className="techCommunityItem">
      <span className="eventDate">10 AUG 2019</span>
        <img
          className="techCommunityPicture"
          src={Musesjs10Aug2019}
          alt="Muses JS"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>Mentor at Muses JS</p>
      </div>


    <div className="techCommunityItem">
      <span className="eventDate">25 & 26 JUL 2019</span>
        <img
          className="techCommunityPicture"
          src={ContainerCamp2526July2019}
          alt="Container Camp"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="eventIcon"/>Container Camp Sydney</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">13 JUL 2019</span>
        <img
          className="techCommunityPicture"
          src={SheHacks13July2019}
          alt="SheHacks"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="eventIcon"/>#SheHacks Sydney</p>
      </div>

      <div className="techCommunityItem">
      <span className="eventDate">01 JUL 2019</span>
        <img
          className="techCommunityPicture"
          src={ReactMeetup01Jul2019}
          alt="React Meetup"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>React Talks</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">11 MAY 2019</span>
        <img
          className="techCommunityPicture"
          src={Musesjs11May2019}
          alt="Muses JS Meetup"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>Muses JS</p>
      </div>

      <div className="techCommunityItem">
      <span className="eventDate">10 APR 2019</span>
        <img
          className="techCommunityPicture"
          src={GA10Apr2019}
          alt="General Assembly"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="eventIcon"/>General Assembly</p>
      </div>

      <div className="techCommunityItem">
      <span className="eventDate">30 NOV 2018</span>
        <img
          className="techCommunityPicture"
          src={SoftwareCrafters30Nov2018}
          alt="Software Crafters Meetup"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>Software Crafters</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">08 NOV 2018</span>
        <img
          className="techCommunityPicture"
          src={CodingDojo08Nov2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="eventIcon"/>Coding Dojo</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate"> 27 OCT 2018</span>
        <img
          className="techCommunityPicture"
          src={LevelUpShowcaseWatchEdition}
          alt="Showcase Watch Edition at ThoughtWorks"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="eventIcon"/>Showcase Watch Edition</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">27 OCT 2018</span>
        <img
          className="techCommunityPicture"
          src={LevelUpTW}
          alt="LevelUp program at ThoughtWorks"
        />
        <p className="eventName"><FontAwesomeIcon icon={faUsersCog} className="eventIcon"/>LevelUp at ThoughtWorks</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">25 OCT 2018</span>
        <img
          className="techCommunityPicture Picture"
          src={CodingDojo25oct2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="eventIcon"/>Coding Dojo</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">11 OCT 2018</span>
        <img
          className="techCommunityPicture"
          src={CodingDojo11Oct2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="eventIcon"/>Coding Dojo</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">27 SEP 2018</span>
        <img
          className="techCommunityPicture"
          src={CodingDojo27Sep2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="eventIcon"/>Coding Dojo</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">21 SEP 2018</span>
        <img
          className="techCommunityPicture"
          src={SoftwareCrafters21Sep2018}
          alt="Software Crafters Meetup"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>Software Crafters</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">13 SEP 2018</span>
        <img
          className="techCommunityPicture"
          src={CodingDojo13Sep2018}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="eventIcon"/>Coding Dojo</p>
      </div>


      <div className="techCommunityItem">
        <span className="eventDate">12 SEP 2018</span>
        <img
          className="techCommunityPicture"
          src={NodeGirls12Sep2018}
          alt="Node Girls Meetup"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>Node Girls</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">05 MAY 2018</span>
        <img
          className="techCommunityPicture"
          src={NodeGirls05May2018}
          alt="Node Girls Meetup"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>Node Girls</p>
      </div>


      <div className="techCommunityItem">
      <span className="eventDate">08 MAR 2018</span>
        <img
          className="techCommunityPicture"
          src={CodingDojo08Mar18}
          alt="Coding Dojo"
        />
        <p className="eventName"><FontAwesomeIcon icon={faCode} className="eventIcon"/>Coding Dojo</p>
      </div>


      <div className="techCommunityItem">
        <span className="eventDate">18 NOV 2017</span>
        <img
          className="techCommunityPicture"
          src={NodeGirls18Nov2017}
          alt="Node Girls Meetup"
        />
        <p className="eventName"><FontAwesomeIcon icon={faMeetup} className="eventIcon"/>Node Girls</p>
      </div>


    </div>

    <Footer />
  </>
)
