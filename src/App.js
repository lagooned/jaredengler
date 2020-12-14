import logo from './img/me-centered.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>jared.engler</h1>
        <ul className="social-links">
          <li>
            <a className="social-link"
                href="https://www.linkedin.com/in/jaredengler/"
                target="_blank"
                rel="noopener noreferrer">
                linkedin
            </a>
          </li>
          <li>
            <a className="social-link"
                href="https://www.github.com/lagooned"
                target="_blank"
                rel="noopener noreferrer">
                github
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
