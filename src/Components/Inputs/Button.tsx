import React from 'react'
import './Button.scss'
import { StandardInputProps } from './StandardInputProps'
import cn from 'classnames'
import Image from './../Content/Image'

interface ButtonProps extends StandardInputProps {
  transparent?: boolean
  imageSrc?: string
  imageAlt?: string
  text?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  transparent = false,
  text = '',
  imageSrc = '',
  imageAlt = '',
  onClick,
}) => {
  return (
    <button
      className={cn('button', { transparent: transparent })}
      onClick={onClick}
    >
      {imageSrc && <Image src={imageSrc} alt={imageAlt} />}
      {text && <p>{text}</p>}
    </button>
  )
}

export default Button
