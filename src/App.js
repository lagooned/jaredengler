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
          <li>
            <a className="social-link"
                href='&#109;ailto&#58;%6A%61re%&#54;&#52;&#46;l&#105;%74%6&#53;&#64;gma&#37;6&#57;%6C&#46;c&#111;%6D'
                target="_blank"
                rel="noopener noreferrer">
                email
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
