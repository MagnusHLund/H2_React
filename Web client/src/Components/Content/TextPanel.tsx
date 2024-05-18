import React, { ReactNode } from 'react'
import './TextPanel.scss'

interface TextPanelProps {
  className?: string
  title: string
  children: ReactNode
}

const TextPanel: React.FC<TextPanelProps> = ({
  className = '',
  title,
  children,
}) => {
  return (
    <div className={`${className} text-panel`}>
      <h2 className="text-panel__title">{title}</h2>
      <div className="text-panel__children">{children}</div>
    </div>
  )
}

export default TextPanel
