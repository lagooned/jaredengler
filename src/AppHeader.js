
import { Component } from 'react'
import logo from './img/me-centered.png'
import SocialLinks from './SocialLinks'

class AppHeader extends Component {

  render() {
    return <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>jared.engler</h1>
      <SocialLinks />
    </header>
  }

}

export default AppHeader
