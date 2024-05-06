import { NavLink } from 'react-router-dom'
import Image from './Image'
import './Navbar.scss'

export type navbarLinks = { title: string; route: string; image: string }[]

interface NavbarProps {
  links: navbarLinks
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <ul className="navbar">
      {links.map((links) => (
        <NavLink to={links.route} className="navbar--link" key={links.title}>
          <Image
            src={links.image}
            alt={`${links.title} icon`}
            className="navbar--link__image"
          />
          <p className="navbar--link__title">{links.title}</p>
        </NavLink>
      ))}
    </ul>
  )
}

export default Navbar
