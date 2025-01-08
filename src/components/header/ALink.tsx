import React from 'react'

type Props = {
    children:React.ReactNode;
    href: string;
    className:string;
    title?:string;
    ariaLabel?:string
    style?: React.CSSProperties

}

export const ALink = ({children, href,className, title, ariaLabel,style}: Props) => {
  return (
    <a 
        href={href}
        className={className}
        title={title}
        aria-label={ariaLabel}
        style={style}>   
        {children}
    </a>
  )
}
