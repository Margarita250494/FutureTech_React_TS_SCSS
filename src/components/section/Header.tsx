import { LinkImgArrow } from "../LinkImgArrow";

type Props = {
  id: string;
  subtitle: string;
  title: string;
  link?: string;
};

export const Header = ({ id, subtitle, title, link }: Props) => {
  return (
    <header className="section__header" aria-labelledby={id}>
      <div className="section__header-inner container">
        <div className="section__header-info">
          <p className="section__subtitle tag">{subtitle}</p>
          <h2 className="section__title" id={id}>
            {title}
          </h2>
        </div>
        {link && (
          <LinkImgArrow
            href="/"
            className="section__link button"
            children={link}
          />
        )}
      </div>
    </header>
  );
};
