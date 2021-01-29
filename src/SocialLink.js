
const SocialLink = (props) => {
  return <li>
    <a className="social-link"
       href={props.href}
       rel="noopener noreferrer">
       {props.label}
    </a>
  </li>
}

export default SocialLink
