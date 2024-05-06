import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar, { navbarLinks } from './Components/Content/Navbar'
import HomeRoute from './Components/Routes/HomeRoute'
import AboutRoute from './Components/Routes/AboutRoute'
import EducationRoute from './Components/Routes/EducationRoute'
import ContactRoute from './Components/Routes/ContactRoute'

function App() {
  const links: navbarLinks = [
    { title: 'Home', route: 'home', image: '/Home.png' },
    { title: 'About', route: 'about', image: '/About.png' },
    { title: 'Education', route: 'education', image: '/Education.png' },
    { title: 'Contact', route: 'contact', image: '/Contact.png' },
  ]

  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/education" element={<EducationRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="*" element={<HomeRoute />} />
      </Routes>
    </>
  )
}

export default App
