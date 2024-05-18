import React from 'react'
import { useTranslation } from '../../Hooks/useTranslation'
import TextPanel from '../Content/TextPanel'
import Image from '../Content/Image'
import calculateAge from '../../Utils/CalculateAge'
import './HomeRoute.scss'
import personalDetails from './../../Component data/PersonalDetails.json'
import socialMedia from './../../Component data/SocialMedia.json'

const HomeRoute: React.FC = () => {
  const t = useTranslation()

  const age = calculateAge(personalDetails[0].Birthday)

  return (
    <div className="home route">
      <div className="home--top">
        <div className="home--top--left">
          <TextPanel title="About me">
            <p>{t('about')}</p>
          </TextPanel>
        </div>
        <div className="home--top--middle">
          <Image
            src="/Me/Home.jpg"
            alt=""
            className="home--top--middle__image"
          />
        </div>
        <div className="home--top--right">
          <TextPanel title="Details">
            <div className="home--top--right__details">
              <b>Name:</b>
              <p>{personalDetails[0].name}</p>
            </div>
            <div className="home--top--right__details">
              <b>Age:</b>
              <p>{age}</p>
            </div>
            <div className="home--top--right__details">
              <b>Location:</b>
              <p>Amager, Denmark</p>
            </div>
            <div className="home--top--right__details">
              <b>Social media:</b>
              {socialMedia.map((platform, index) => (
                <div
                  key={index}
                  className="home--top--right__socials--container"
                >
                  {Object.entries(platform).map(([key, value]) => (
                    <div key={key}>
                      <a href={value.Link} target="blank">
                        <Image src={value.ImagePath} alt={value.Name} />
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </TextPanel>
        </div>
      </div>
      <div className="home--bottom">
        <div className="home--bottom--left">
          <TextPanel title="What I do">{t('about')}</TextPanel>
        </div>
        <div className="home--bottom--middle">
          <TextPanel title="Total visitors">{t('about')}</TextPanel>
        </div>
        <div className="home--bottom--right">
          <TextPanel title="Jobs">{t('about')}</TextPanel>
        </div>
      </div>
    </div>
  )
}

export default HomeRoute
