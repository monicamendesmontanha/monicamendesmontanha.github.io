import React from "react"
import Menu from "./components/Menu"
import "./scss/projects.scss"
import MyNewsIphone from "./img/MyNewsIphone.png"
import MyNewsIpad from "./img/MyNewsIpad.png"
import TripWalletIphone from "./img/TripWalletIphone.png"
import TripWalletIpad from "./img/TripWalletIpad.png"
import TicTacToeMonitor from "./img/TicTacToeMonitor.png"

export default () => (
  <>
    <Menu />
    <h3>PROJECTS</h3>
    <div className="container">
      <div className="item">
        <div className="descriptionItem">
          <div className="projectName">MY NEWS</div>
          <div className="summary">
            <li>
              Listen and read the news around the world in an accessible way
            </li>
            <li>Play, Pause, Resume and Stop any time the speaking content.</li>
            <li>
              Read without distractions, the content is showed without
              advertising.
            </li>
            <li>Click and go to the original article page.</li>
          </div>
        </div>
        <div className="display">
          <img
            className="iphone"
            src={MyNewsIphone}
            alt="My News Iphone"
            height="240"
            width="140"
          />
          <img
            className="ipad"
            src={MyNewsIpad}
            alt="My News Ipad"
            height="300"
            width="240"
          />
        </div>
        <div className="techUsed">
            <div className="tag">React</div>
            <div className="tag">Node.js</div>
            <div className="tag">Express</div>
            <div className="tag">SASS</div>
          </div>
      </div>

      <div className="item">
        <div className="descriptionItem">
          <div className="projectName">TRIP WALLET</div>
          <div className="summary">
            <li>Keep track of your expenses while travelling.</li>
            <li>Automatically conversion the rates.</li>
            <li>Enjoy travelling and saving money at the same time.</li>
            <li>
              Store and visualise all your expenses organized by category.
            </li>
          </div>
        </div>
        <div className="display">
          <img
            className="iphone"
            src={TripWalletIphone}
            alt="Trip Wallet Iphone"
            height="240"
            width="140"
          />
          <img
            className="ipad"
            src={TripWalletIpad}
            alt="Trip Wallet Ipad"
            height="300"
            width="240"
          />
        </div>
        <div className="techUsed">
            <div className="tag">Ruby on Rails</div>
            <div className="tag">Postgress</div>
            <div className="tag">CSS</div>
          </div>
      </div>

      <div className="item">
        <div className="descriptionItem">
          <div className="projectName">TIC TAC TOE</div>
          <div className="summary">
            <li>Keep track of your expenses while travelling.</li>
            <li>Automatically conversion the rates.</li>
            <li>Enjoy travelling and saving money at the same time.</li>
            <li>
              Store and visualise all your expenses organized by category.
            </li>
          </div>
        </div>
        <div className="display">
          <img
            src={TicTacToeMonitor}
            alt="Tic Tac Toe Monitor"
            height="240"
            width="340"
          />
        </div>
        <div className="techUsed">
            <div className="tag">Javascript</div>
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
          </div>
      </div>
    </div>
  </>
)
