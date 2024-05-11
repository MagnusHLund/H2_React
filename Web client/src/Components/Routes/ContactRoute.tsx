import { useEffect, useState } from 'react'
import Form from '../Content/Form'
import PostCard from '../Content/Postcard'
import TextInput from '../Inputs/TextInput'
import './ContactRoute.scss'
import Paper from '../Content/Paper'

type formType = 'post-card__form' | 'paper__form'

const ContactRoute: React.FC = () => {
  const [formType, setFormType] = useState<formType>('post-card__form')

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 1300
        ? setFormType('post-card__form')
        : setFormType('paper__form')

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  })

  const form = (
    <Form
      className="contact__form"
      postcard={formType == 'post-card__form'}
      paper={formType == 'paper__form'}
    >
      <p className={`contact__form--text ${formType}`}>Hello Magnus,</p>
      <TextInput
        placeholder="Message"
        className={`contact__form--message ${formType}`}
        multiLine={true}
      />
      <p className={`contact__form--text ${formType}`}>Sincerely</p>
      <TextInput
        placeholder="Your name"
        className={`contact__form--name ${formType}`}
      />
      <TextInput
        placeholder="Your email"
        type="email"
        className={`contact__form--email ${formType}`}
      />
    </Form>
  )

  return (
    <div className="contact route">
      {formType == 'post-card__form' ? (
        <PostCard
          recipientName="Magnus Herringe Lund"
          recipientAddress="Amager, 2300"
          recipientCountry="Denmark"
        >
          {form}
        </PostCard>
      ) : (
        <Paper>{form}</Paper>
      )}
    </div>
  )
}

export default ContactRoute
