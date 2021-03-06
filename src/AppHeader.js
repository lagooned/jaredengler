
import { Component } from 'react'
import logo from './img/me-centered-better.png'
import SocialLinks from './SocialLinks'

class AppHeader extends Component {

  render() {
    return <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>jared.engler</h1>
      <SocialLinks />
      <hr className="fancy-hr"/>
      <p className="copy">jared engler &copy; 2021</p>
    </header>
  }

}

export default AppHeader
