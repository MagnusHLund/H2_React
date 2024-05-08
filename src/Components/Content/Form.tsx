import { ReactNode } from 'react'
import './Form.scss'

interface FormProps {
  className?: string
  children: ReactNode
}

const Form: React.FC<FormProps> = ({ className = '', children }) => {
  return (
    <form className={`form ${className}`}>
      <div>{children}</div>
      <input type="submit" />
    </form>
  )
}

export default Form
