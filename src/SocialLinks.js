
import { Component } from 'react'

class SocialLinks extends Component {

  render() {
    return <ul className="social-links">
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
      <li>
        <a className="social-link"
            href='https://lagooned.github.io/blog'
            target="_blank"
            rel="noopener noreferrer">
            blog
        </a>
      </li>
      <li>
        <a className="social-link"
            href='https://lagooned.github.io/jaredengler/resume.pdf'
            target="_blank"
            rel="noopener noreferrer">
            resume
        </a>
      </li>
    </ul>
  }

}

export default SocialLinks
