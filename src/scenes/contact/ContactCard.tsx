import { LinkImgArrow } from '@/components/LinkImgArrow';

type ContactCardProps = {
    title: string;
    email?: string;
    phone?: string;
    address?: string;
    direction?: string;
  };

export const ContactCard = ({ title, email, phone, address, direction }: ContactCardProps) => {
  return (
    <li className="bordered-grid__item">
    <div className="contacts-card">
      <h2 className="contacts-card__title h6">{title}</h2>
      <div className="contacts-card__body">
        {email && (
          <LinkImgArrow href={`mailto:${email}`} className="contacts-card__link button button--dark-gray">
            {email}
          </LinkImgArrow>
        )}
        {phone && (
          <LinkImgArrow href={`tel:${phone}`} className="contacts-card__link button button--dark-gray">
            {phone}
          </LinkImgArrow>
        )}
        {address && <address className="contacts-card__address">{address}</address>}
        {direction && (
          <LinkImgArrow href="/" className="contacts-card__link button button--dark-gray">
            {direction}
          </LinkImgArrow>
        )}
      </div>
    </div>
  </li>
  )
}

