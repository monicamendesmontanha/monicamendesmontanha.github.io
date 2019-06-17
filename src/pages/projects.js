import React from "react"
import Menu from "./components/Menu"
import "./index.css"
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
        <div className="summary">
          <div>
            MY NEWS
          </div>
          <div>
          <li>Listen and read the news around the world in an accessible way</li>
          <li>Play, Pause, Resume and Stop any time the speaking content.</li>
          <li>Read without distractions, the content is showed without advertising.</li>
          <li>Click and go to the original article page.</li>
          </div>
          <div className="techUsed">React, Node.js/Express and SASS</div>
        </div>
        <div className="monitor">
        <img src={MyNewsIphone} alt="My News Iphone" height="240" width="140" />
        <img src={MyNewsIpad} alt="My News Ipad" height="300" width="240" />
        </div>
      </div>

      <div className="item">
      <div className="summary">
          <div>
            TRIP WALLET
          </div>
          <div>
          <li>Keep track of your expenses while travelling.</li>
          <li>Automatically conversion the rates.</li>
          <li>Enjoy travelling and saving money at the same time.</li>
          <li>Store and visualise all your expenses organized by category.</li>
          </div>
          <div className="techUsed">Ruby on Rails, Postgress and CSS</div>
        </div>
        <div className="monitor">
        <img src={TripWalletIphone} alt="Trip Wallet Iphone" height="240" width="140" />
        <img src={TripWalletIpad} alt="Trip Wallet Ipad" height="300" width="240" />
        </div>
      </div>


      <div className="item">
      <div className="summary">
          <div>
          TIC TAC TOE
          </div>
          <div>
          <li>Keep track of your expenses while travelling.</li>
          <li>Automatically conversion the rates.</li>
          <li>Enjoy travelling and saving money at the same time.</li>
          <li>Store and visualise all your expenses organized by category.</li>
          </div>
          <div className="techUsed">Javascript, HTML and CSS</div>
        </div>
        <div className="monitor">
        <img src={TicTacToeMonitor} alt="Tic Tac Toe Monitor" height="240" width="340" />
        </div>
      </div>
    </div>
  </>
)
