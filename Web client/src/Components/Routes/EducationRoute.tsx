import './EducationRoute.scss'
import { useTranslation } from '../../Hooks/useTranslation'
import Book from '../Content/Book'
import Box from '../Content/Box'

const EducationRoute: React.FC = () => {
  const t = useTranslation()

  return (
    <div className="education route">
      <div className="education__books--container">
        <Book
          BookTitle="H1 grades"
          PageHeader="H1 grades"
          className="education__book"
        >
          <div>
            <h4>Grades:</h4>
            <ul>
              <li>(6225) Computerteknologi: 7</li>
              <li>(16476) Client-side programmering: 12</li>
              <li>(6230) Database server: 10</li>
              <li>(16474) Database programmering: 10</li>
              <li>(6222) Serveradministration og sikkerhed: 7</li>
              <li>(16472) grundlæggende programmering: 12</li>
              <li>(16471) Objekt-orienteret programmering: 12</li>
            </ul>
          </div>
          <div>
            <br />
            <h4>Message from the primary teacher:</h4>
            <p>
              Det er en stor glæde at have Magnus på holdet. Han arbjeder
              intenst med faget, er konstant nysgerrig og stiller mange
              spørgsmål. Han udforder hele tiden sig selv. Som kollega er Magnus
              fremragende, og han er altid parat til at hjælpe andre efter
              behov.
            </p>
          </div>
        </Book>
      </div>
      <Box title="Upcoming school periods">t</Box>
    </div>
  )
}

export default EducationRoute
