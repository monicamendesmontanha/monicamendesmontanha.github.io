import React from "react"
import Menu from "./components/Menu"

export default () => (
  <>
    <Menu />
    <h3>CONTACT</h3>
    <p>If you have any questions, please don't hesitate to contact using form below...</p>
    <form>
      <input placeholder="Name"></input>
      <input placeholder="Email"></input>
      <input placeholder="Message"></input>
      <button type="submit">Send</button>
    </form>
    <div>
      <div>Sydney, NSW</div>
      <div>monicamendesmontanha@gmail.com</div>
    </div>
  </>
)