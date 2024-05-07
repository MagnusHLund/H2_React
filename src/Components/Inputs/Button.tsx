import React from 'react'
import './Button.scss'
import { StandardInputProps } from './StandardInputProps'
import cn from 'classnames'

interface ButtonProps extends StandardInputProps {
  transparent?: boolean
}

const Button: React.FC<ButtonProps> = ({ transparent = false }) => {
  return (
    <button className={cn('button', { transparent: transparent })}></button>
  )
}

export default Button
