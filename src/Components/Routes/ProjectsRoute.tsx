import ThinkingBubble from '../Content/ThinkingBubble'
import './ProjectsRoute.scss'

type projects = { title: string; text: string; link: string }[]

const ProjectsRoute: React.FC = () => {
  const projects: projects = [
    { title: 'LundBot69', text: 'LundBot69Text', link: 'github.com' },
    { title: 'LundBot69', text: 'LundBot69Text', link: 'github.com' },
    { title: 'LundBot69', text: 'LundBot69Text', link: 'github.com' },
    { title: 'LundBot69', text: 'LundBot69Text', link: 'github.com' },
  ]

  return (
    <div className="projects">
      <ThinkingBubble title="Projects" isBig={true}>
        <p>text</p>
      </ThinkingBubble>
      {projects.map((project) => (
        <ThinkingBubble title={project.title} key={project.title}>
          {project.text}
        </ThinkingBubble>
      ))}
    </div>
  )
}

export default ProjectsRoute
