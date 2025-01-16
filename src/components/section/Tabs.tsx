import { getPageButtons } from "@/shared/constants";
import { useState } from "react";
import { TabsBody } from "./TabsBody";
import { blogHomeData } from "./data";


type Props = {
  page: string;
};

export const Tabs = ({ page }: Props) => {
  const buttons = getPageButtons(page);

  const [activeButton, setActiveButton] = useState<string | null>(
    buttons.length > 0 ? buttons[0].title : null 
  );

  const handleClick = (title:string) => {
    setActiveButton(title);
  }

  return (
    <div className="section__body tabs">
      <h3 className="visually-hidden" id="blog-category-title">
        Blog Category
      </h3>
      <header className="tabs__header">
        <div
          className="tabs__buttons container"
          role="tablist"
          aria-labelledby="blog-category-title"
        >
          {buttons.map((button, id) => (
            <button
              key={id}
              className={`tabs__button ${
                activeButton === button.title ? "active" : ""
              }`}
              type="button"
              id={button.title}
              role="tab"
              aria-controls={button.ariaControls}
              tabIndex={activeButton === button.title ? 0 : -1} 
              onClick={() => handleClick(button.title)}
            >
              {button.title}
            </button>
          ))}
        </div>
      </header>
      <TabsBody blogs={blogHomeData}/>
    </div>
  );
};
