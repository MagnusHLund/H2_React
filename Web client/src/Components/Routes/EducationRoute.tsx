import './EducationRoute.scss'
import Box from '../Content/Box'
import { useTranslation } from '../../Hooks/useTranslation'

const EducationRoute: React.FC = () => {
  const t = useTranslation()
  return (
    <div className="education route">
      <div className="education__box--container">
        <Box title="Schools">
          <p>{t('about')}</p>
        </Box>
        <Box title="Grades">
          <p>{t('about')}</p>
        </Box>
      </div>
    </div>
  )
}

export default EducationRoute
