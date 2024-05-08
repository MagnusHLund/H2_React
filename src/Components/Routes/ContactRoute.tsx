import Form from '../Content/Form'
import Image from '../Content/Image'
import './ContactRoute.scss'

const ContactRoute: React.FC = () => {
  return (
    <div className="contact route">
      <Image
        src="/Background/PostCard.png"
        alt="Me holding a post card"
        className="contact__image"
      />
      <Form className="contact__form">
        <input type="text"></input>
      </Form>
    </div>
  )
}

export default ContactRoute
