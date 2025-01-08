import React from 'react'

type Props = {
    className:string;
    style?: React.CSSProperties
}

export const ContactUsLink = ({className, style}: Props) => {
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
