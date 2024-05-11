import './Image.scss'

interface ImageProps {
  alt: string
  src: string
  className?: string
}

const Image: React.FC<ImageProps> = ({ alt, src, className = '' }) => {
  return (
    <img alt={alt} src={src} className={`image ${className}`} loading="eager" />
  )
}

export default Image
