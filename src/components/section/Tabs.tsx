import { useState } from "react";
import { TabsBody } from "./TabsBody";
import { blogHomeData } from "./data";
import { getPageButtons } from "@/shared/constants";

type Props = {
  page: string;
};

export const Tabs = ({ page }: Props) => {
  const pageButtons = getPageButtons(page);

  const [activeButton, setActiveButton] = useState<string>(
    pageButtons.length > 0 ? pageButtons[0].title : "All"
  );

  const filteredBlogs =
    activeButton === "All"
      ? blogHomeData
      : blogHomeData.filter((blog) => blog.author.department === activeButton);

  const handleClick = (title: string) => {
    setActiveButton(title);
  };

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
          {pageButtons.map((button, id) => (
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
      <TabsBody blogs={filteredBlogs} />
    </div>
  );
};
