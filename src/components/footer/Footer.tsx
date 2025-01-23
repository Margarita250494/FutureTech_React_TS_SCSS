import { FooterExtra } from "./FooterExtra"
import { FooterMenu } from "./FooterMenu"

export  const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__inner container">
            <div className="footer__body">
                <nav className="footer__menu">
                    <FooterMenu/>
                </nav>
            </div>
            <FooterExtra/>
        </div>
    </footer>
  )
}

