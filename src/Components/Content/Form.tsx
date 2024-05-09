import { ReactNode } from 'react'
import './Form.scss'
import Button from '../Inputs/Button'

interface FormProps {
  className?: string
  children: ReactNode
  postcard?: boolean
}

const Form: React.FC<FormProps> = ({
  className = '',
  children,
  postcard = false,
}) => {
  return (
    <form className={`form ${className}`}>
      <div className="form__child-container">{children}</div>
      <Button type="submit" postcard={postcard} />
    </form>
  )
}

export default Form
