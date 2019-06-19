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
        <div>
          <div className="projectName">MY NEWS</div>
          <div className="sectionDemoCode">
            <div className="demoCodeButton"><a target="_blank" rel="noopener noreferrer" href="https://mmm-my-news.herokuapp.com/">DEMO</a></div>
            <div className="demoCodeButton"><a target="_blank" rel="noopener noreferrer" href="https://github.com/monicamendesmontanha/my-news">CODE</a></div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://mmm-my-news.herokuapp.com/">
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
          </a>
        </div>
        <div className="display">
        <a target="_blank" rel="noopener noreferrer" href="https://mmm-my-news.herokuapp.com/">
          <img
            className="iphone"
            src={MyNewsIphone}
            alt="My News Iphone"
          />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://mmm-my-news.herokuapp.com/">
          <img
            className="ipad"
            src={MyNewsIpad}
            alt="My News Ipad"
          />
          </a>
        </div>
        <div className="techUsed">
            <div className="tag">React</div>
            <div className="tag">Node.js</div>
            <div className="tag">Express</div>
            <div className="tag">SASS</div>
          </div>
      </div>

      <div className="item">
        <div>
          <div className="projectName">TRIP WALLET</div>
          <div className="sectionDemoCode">
            <div className="demoCodeButton"><a target="_blank" rel="noopener noreferrer" href="https://trip-wallet.herokuapp.com/">DEMO</a></div>
            <div className="demoCodeButton"><a target="_blank" rel="noopener noreferrer" href="https://github.com/monicamendesmontanha/trip_wallet">CODE</a></div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://trip-wallet.herokuapp.com/">
          <div className="summary">
            <li>Keep track of your expenses while travelling.</li>
            <li>Automatically conversion the rates.</li>
            <li>Enjoy travelling and saving money at the same time.</li>
            <li>
              Store and visualise all your expenses organized by category.
            </li>
          </div>
          </a>
        </div>
        <div className="display">
        <a target="_blank" rel="noopener noreferrer" href="https://trip-wallet.herokuapp.com/">
          <img
            className="iphone"
            src={TripWalletIphone}
            alt="Trip Wallet Iphone"
          />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://trip-wallet.herokuapp.com/">
          <img
            className="ipad"
            src={TripWalletIpad}
            alt="Trip Wallet Ipad"
          />
        </a>
        </div>
        <div className="techUsed">
            <div className="tag">Ruby on Rails</div>
            <div className="tag">Postgress</div>
            <div className="tag">CSS</div>
          </div>
      </div>

      <div className="item">
        <div>
          <div className="projectName">TIC TAC TOE</div>
          <div className="sectionDemoCode">
            <div className="demoCodeButton"><a target="_blank" rel="noopener noreferrer" href="https://monicamendesmontanha.github.io/tic-tac-toe/">DEMO</a></div>
            <div className="demoCodeButton"><a target="_blank" rel="noopener noreferrer" href="https://github.com/monicamendesmontanha/tic-tac-toe">CODE</a></div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://monicamendesmontanha.github.io/tic-tac-toe/">
          <div className="summary">
            <li>Play the famous game of X's and O's.</li>
            <li>Inspired on Super Nintendo Classic, the NES.css Framework will bring to you a great nostalgia.</li>
            <li>Enjoy and invite a 2º player to the game!</li>
          </div>
        </a>
        </div>
        <div className="display">
        <a target="_blank" rel="noopener noreferrer" href="https://monicamendesmontanha.github.io/tic-tac-toe/">
          <img
            className="monitor"
            src={TicTacToeMonitor}
            alt="Tic Tac Toe Monitor"
          />
        </a>
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