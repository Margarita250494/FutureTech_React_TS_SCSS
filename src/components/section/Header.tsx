import { LinkImgArrow } from "../LinkImgArrow";
import { SectionHeader } from "@/shared/types";

export const Header = ({ id, subtitle, title, link }: SectionHeader) => {
  return (
    <header className="section__header">
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
