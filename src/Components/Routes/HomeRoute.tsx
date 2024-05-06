import Box from '../Content/Box'
import InfoBox, {
  AdditionalDetails,
  personalDetails,
  socialMedia,
} from '../Content/InfoBox'
import { useTranslation } from '../../Hooks/useTranslation'

const HomeRoute: React.FC = () => {
  const t = useTranslation()

  const infoBoxPersonalDetails: personalDetails = {
    name: 'Magnus H. Lund',
    profession: 'Data technician w/ specialty in programming, Apprentice',
    imagePath: '/lectio.jpg',
  }
  const infoBoxSocialMedia: socialMedia = [
    { link: 'LinkedIn', imagePath: '/LinkedIn.png', alt: 'LinkedIn icon' },
    { link: 'Github', imagePath: 'Github.png', alt: 'Github icon' },
  ]
  const infoBoxAdditionalDetails: AdditionalDetails = [
    { text: '14/08/2004', imagePath: '/Calendar.png', alt: 'Calendar icon' },
    { text: 'Amager, Denmark', imagePath: '/Address.png', alt: 'Address icon' },
    { text: '+45 30205365', imagePath: '/Phone.png', alt: 'Phone icon' },
    {
      text: 'magnusherringelund@hotmail.com',
      imagePath: '/Mail.png',
      alt: 'Mail icon',
    },
  ]
  return (
    <div className="home">
      <InfoBox
        personalDetails={infoBoxPersonalDetails}
        socialMedia={infoBoxSocialMedia}
        AdditionalDetails={infoBoxAdditionalDetails}
        className="home__info-box"
      />
      <Box title="About" className="home__content">
        <p>{t('about')}</p>
      </Box>
    </div>
  )
}

export default HomeRoute
