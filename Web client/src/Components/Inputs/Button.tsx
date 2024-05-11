import React from 'react'
import './Button.scss'
import { StandardInputProps } from './StandardInputProps'
import cn from 'classnames'
import Image from './../Content/Image'

interface ButtonProps extends StandardInputProps {
  transparent?: boolean
  postcard?: boolean
  imageSrc?: string
  imageAlt?: string
  text?: string
  className?: string
  type?: 'button' | 'submit'
}

const Button: React.FC<ButtonProps> = ({
  transparent = false,
  postcard = false,
  text = '',
  imageSrc = '',
  imageAlt = '',
  className = '',
  type = 'button',
  onClick,
}) => {
  const fullClassName = cn(`${className} ${type}`, {
    transparent: transparent,
    card: postcard,
  })
  return (
    <>
      {type == 'button' && (
        <button className={fullClassName} onClick={onClick}>
          {imageSrc && <Image src={imageSrc} alt={imageAlt} />}
          {text && <p>{text}</p>}
        </button>
      )}
      {type == 'submit' && (
        <input
          type="submit"
          className={fullClassName}
          onClick={onClick}
          value={'Send message'}
        />
      )}
    </>
  )
}

export default Button
