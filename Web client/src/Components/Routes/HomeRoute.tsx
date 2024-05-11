import { useState } from 'react'
import { useTranslation } from '../../Hooks/useTranslation'
import './HomeRoute.scss'
import Button from '../Inputs/Button'

type homeStages = 'house' | 'apartment' | 'kitchen' | 'living-room' | 'bedroom'

const HomeRoute: React.FC = () => {
  const [homeStage, setHomeStage] = useState<homeStages>('house')
  const t = useTranslation()

  const house = (
    <div>
      <div className="mailbox">
        <div className="mailbox__container">
          <div className="mailbox__container--front">19</div>
          <div className="mailbox__container--text">
            <p>Magnus H. Lund</p>
            <p>Amager, Denmark</p>
          </div>
        </div>
        <div className="mailbox__foot" />
      </div>
      <div className="house">
        <div className="house__roof">
          <div className="house__roof--left"></div>
          <div className="house__roof--right">
            <div className="house__roof--chimney" />
          </div>
        </div>
        <div className="house__wall">
          <div className="house__wall--left">
            <Button className="house__door" transparent={true} />
          </div>
          <div className="house__wall--right">
            <div className="house__window" />
            <div className="house__window" />
          </div>
        </div>
      </div>
    </div>
  )

  return <div className="home route">{house}</div>
}

export default HomeRoute
