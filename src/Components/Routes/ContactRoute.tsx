import Form from '../Content/Form'
import PostCard from '../Content/Postcard'
import TextInput from '../Inputs/TextInput'
import './ContactRoute.scss'

const ContactRoute: React.FC = () => {
  return (
    <div className="contact route">
      <PostCard
        recipientName="Magnus Herringe Lund"
        recipientAddress="Amager, 2300"
        recipientCountry="Denmark"
      >
        <Form className="contact__form" postcard={true}>
          <p className="contact__form--sincerely">Hello Magnus,</p>
          <TextInput
            placeholder="Message"
            className="contact__form--message"
            multiLine={true}
          />
          <p className="contact__form--sincerely">Sincerely</p>
          <TextInput placeholder="Your name" className="contact__form--name" />
          <TextInput
            placeholder="Your email"
            type="email"
            className="contact__form--email"
          />
        </Form>
      </PostCard>
    </div>
  )
}

export default ContactRoute
