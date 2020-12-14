import logo from './img/me-centered.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>jared.engler</p>
        <a className="social-link"
           href="https://www.linkedin.com/in/jaredengler/"
           target="_blank"
           rel="noopener noreferrer">
           linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
