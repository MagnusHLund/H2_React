import { useEffect, useState } from 'react'
import { useTranslation } from '../../Hooks/useTranslation'
import ThinkingBubble from '../Content/ThinkingBubble'
import Image from './../Content/Image'
import './ProjectsRoute.scss'

type projects = {
  title: string
  text: string
  link: string
  imagePath: string
}[]

const ProjectsRoute: React.FC = () => {
  const t = useTranslation()
  const [projectToShow, setProjectToShow] = useState<number>(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScrollPosition =
        document.documentElement.scrollHeight - window.innerHeight

      const heightPerProject = maxScrollPosition / projects.length

      let calculateProjectToShow = Math.floor(scrollPosition / heightPerProject)

      if (calculateProjectToShow >= projects.length) {
        calculateProjectToShow = projects.length - 1
      }

      if (scrollPosition <= 0 || isNaN(calculateProjectToShow)) {
        calculateProjectToShow = 0
      }
      console.log(calculateProjectToShow)
      setProjectToShow(calculateProjectToShow)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const projects: projects = [
    {
      title: 'LundBot69',
      text: t('about'),
      link: 'https://github.com/MagnusHLund/LundBot69_Twitch',
      imagePath: '/Projects/LundBot69.png',
    },
    {
      title: 'Frogo restaurant',
      text: t('about'),
      link: 'https://magnuslund.itch.io/frogo-restaurant',
      imagePath: '/Projects/FrogoRestaurant.png',
    },
    {
      title: 'Temporary storage',
      text: t('about'),
      link: 'https://github.com/MagnusHLund/Temporary_storage',
      imagePath: '/Projects/TempStorage.png',
    },
    {
      title: 'CV website',
      text: t('about'),
      link: 'https://github.com/MagnusHLund/H2_React_Resume_website',
      imagePath: '/Me/Home.jpg',
    },
    {
      title: 'A lot more!',
      text: t('about'),
      link: 'https://github.com/MagnusHLund',
      imagePath: '/Social media/Github.png',
    },
  ]

  const pageHeight = (projects.length * 100) / 3

  return (
    <div className="projects route" style={{ height: `${pageHeight}vh` }}>
      <Image
        src={'/Background/Sun.png'}
        alt="The sun"
        className="projects--sun"
      />
      <ThinkingBubble
        title={projects[projectToShow].title}
        isBig={true}
        className="projects__main-content"
      >
        {t('about')}
      </ThinkingBubble>

      <ThinkingBubble sideSpacing={false}>
        <a
          href={projects[projectToShow].link}
          target="blank"
          className="projects__project-image"
        >
          <Image
            src={projects[projectToShow].imagePath}
            alt="Image of my project icon, inside of a dialogue balloon"
            className="projects__project-image"
          />
        </a>
      </ThinkingBubble>
      <Image
        src="/Me/Thinking.png"
        alt="Person thinking"
        className="projects__person-image"
      />
    </div>
  )
}

export default ProjectsRoute
