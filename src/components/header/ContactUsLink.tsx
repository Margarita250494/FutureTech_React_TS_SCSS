import { ContactUsProps } from '@/shared/types'

export const ContactUsLink = ({className, style}: ContactUsProps) => {
  return (
    <a 
        href="/"
        className={className}
        title="Contact us"
        aria-label="Contact us"
        style={style}>   
        Contact Us
    </a>
  )
}
