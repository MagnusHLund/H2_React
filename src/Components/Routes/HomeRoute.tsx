import Box from '../Content/Box'
import InfoBox, {
  AdditionalDetails,
  personalDetails,
  socialMedia,
} from '../Content/InfoBox'
import { useTranslation } from '../../Hooks/useTranslation'
import './HomeRoute.scss'

const HomeRoute: React.FC = () => {
  const t = useTranslation()

  const infoBoxPersonalDetails: personalDetails = {
    name: 'Magnus H. Lund',
    profession: 'Data technician w/ specialty in programming, Student',
    imagePath: '/Me/Home.png',
  }
  const infoBoxSocialMedia: socialMedia = [
    {
      link: 'LinkedIn',
      imagePath: '/Social media/LinkedIn.png',
      alt: 'LinkedIn icon',
    },
    {
      link: 'Github',
      imagePath: '/Social media/Github.png',
      alt: 'Github icon',
    },
  ]
  const infoBoxAdditionalDetails: AdditionalDetails = [
    {
      text: '14/08/2004',
      imagePath: '/Personal info/Calendar.png',
      alt: 'Calendar icon',
    },
    {
      text: 'Amager, Denmark',
      imagePath: '/Personal info/Address.png',
      alt: 'Address icon',
    },
    {
      text: '+45 30205365',
      imagePath: '/Personal info/Phone.png',
      alt: 'Phone icon',
    },
    {
      text: 'magnusherringelund@hotmail.com',
      imagePath: '/Personal info/Mail.png',
      alt: 'Mail icon',
    },
  ]
  return (
    <div className="home route">
      <InfoBox
        personalDetails={infoBoxPersonalDetails}
        socialMedia={infoBoxSocialMedia}
        AdditionalDetails={infoBoxAdditionalDetails}
        className="home__info-box"
      />
      <div className="home__box--container">
        <Box title="About">
          <p>{t('about')}</p>
        </Box>
        <Box title="What I do?">
          <p>{t('about')}</p>
        </Box>
        <Box title="Jobs">
          <p>{t('about')}</p>
        </Box>
        <Box title="Total visitors">
          <p>{t('about')}</p>
        </Box>
      </div>
    </div>
  )
}

export default HomeRoute
