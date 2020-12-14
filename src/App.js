
import { Component } from 'react'
import logo from './img/me-centered.png';
import SocialLinks from './SocialLinks'
import './App.css';

class App extends Component {

  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>jared.engler</h1>
          <SocialLinks />
        </header>
      </div>
  }

}

export default App;
