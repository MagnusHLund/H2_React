import { ReactNode } from 'react'
import cn from 'classnames'
import './ThinkingBubble.scss'

interface ThinkingBubbleProps {
  className?: string
  children: ReactNode
  title: string
  isBig?: boolean
}

const ThinkingBubble: React.FC<ThinkingBubbleProps> = ({
  className = '',
  children,
  title,
  isBig = false,
}) => {
  return (
    <div
      className={cn(`thinking-bubble ${className}`, {
        big: isBig,
        small: !isBig,
      })}
    >
      <p className="thinking-bubble__title">{title}</p>
      <div className="thinking-bubble__child-container">{children}</div>
    </div>
  )
}

export default ThinkingBubble
