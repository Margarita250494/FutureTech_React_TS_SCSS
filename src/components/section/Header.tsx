import { LinkImgArrow } from "../LinkImgArrow";
import { SectionHeader } from "@/shared/types";
import { Intro } from "./Intro";

export const Header = ({ id, subtitle, title, link, to }: SectionHeader) => {
  return (
    <header className="section__header">
      <div className="section__header-inner container">
        <Intro
        divClassName="section__header-info"
        reverse={true}
        pClassName="section__subtitle tag"
        intro={subtitle}
        h2ClassName="section__title"
        id={id}
        title={title}/>
        {link && (
          <LinkImgArrow
            href={to}
            className="section__link button"
            children={link}
          />
        )}
      </div>
    </header>
  );
};
