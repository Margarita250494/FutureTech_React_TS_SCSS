import { FooterLinks } from "./FooterLinks";
import { FooterSocials } from "./FooterSocials";

export const FooterExtra = () => {
  return (
    <div className="footer__extra">
      <div className="footer__extra-menu">
        <FooterLinks/>
      </div>
      <div className="footer__soc1als soc1als">
        <FooterSocials/>
      </div>
      <p className="footer__copyright">
        © <time dateTime="2024">2024</time> FutureTech. All rights reserved.
      </p>
    </div>
  );
};
