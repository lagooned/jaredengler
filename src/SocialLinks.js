
import { Component } from 'react'
import SocialLink from './SocialLink'

class SocialLinks extends Component {

  render() {
    return <ul className="social-links">
      <SocialLink href="https://www.linkedin.com/in/jaredengler" label="linkedin" />
      <SocialLink href="https://www.github.com/lagooned" label="github" />
      <SocialLink href="&#109;ailto&#58;%6A%61re%&#54;&#52;&#46;l&#105;%74%6&#53;&#64;gma&#37;6&#57;%6C&#46;c&#111;%6D" label="email" />
      <SocialLink href="https://lagooned.github.io/blog" label="blog" />
      <SocialLink href="/jaredengler/resume.pdf" label="resume" />
    </ul>
  }

}

export default SocialLinks
