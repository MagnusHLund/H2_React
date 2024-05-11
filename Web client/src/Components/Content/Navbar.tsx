import { NavLink } from 'react-router-dom'
import Image from './Image'
import './Navbar.scss'
import {
  changeLanguage,
  Language,
  LanguageProps,
} from '../../Redux/Slices/LanguageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/Store'
import Button from '../Inputs/Button'

export type navbarLinks = { title: string; route: string; image: string }[]

interface NavbarProps {
  links: navbarLinks
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const dispatch = useDispatch()

  const languageState: LanguageProps = useSelector(
    (state: RootState) => state.language
  )

  const currentLanguage = languageState.current
  const languages = languageState.languages

  const languageToShow: Language = languages[currentLanguage]

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

      <Button
        onClick={() => {
          dispatch(changeLanguage())
        }}
        imageSrc={`/Flags/${languageToShow}.png`}
        imageAlt="Change language"
        transparent={true}
      />
    </ul>
  )
}

export default Navbar