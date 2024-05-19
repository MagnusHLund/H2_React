import './EducationRoute.scss'
import { useTranslation } from '../../Hooks/useTranslation'
import Book from '../Content/Book'
import Box from '../Content/Box'
import Paragraph from '../Content/Paragraph'

const EducationRoute: React.FC = () => {
  const t = useTranslation()

  return (
    <div className="education route">
      <div className="education__books--container">
        <Book
          BookTitle={t('h1.title')}
          PageHeader={t('h1.title')}
          className="education__book"
        >
          <div>
            <h4>{t('h1.grades')}</h4>
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
            <h4>{t('h1.teacher')}</h4>
            <p>{t('h1.teachers message')}</p>
          </div>
        </Book>
      </div>
      <div>
        <Box title={t('zbc.current education')}>
          <Paragraph texts={[t('zbc.explanation'), t('zbc.periods')]} />
        </Box>
        <Box title={t('attended schools.attended')}>
          {t('attended schools.boarding school')}
        </Box>
      </div>
    </div>
  )
}

export default EducationRoute
