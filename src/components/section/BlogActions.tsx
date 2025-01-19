import { ActionProps } from "@/shared/types";
import { useState } from "react";

export const BlogActions = ({ actions }: { actions: ActionProps[] }) => {

  const [isActive, setIsActive] = useState<number | null>(null);

  const handleActionClick = (index: number) => {
    setIsActive((prev) => (prev === index ? null : index));
  };

  return (
    <div className="blog-card__actions actions">
      <ul className="blog-actions__list">
        {actions.map((action,index) => (
          <li className="blog-actions__item" key={index}>
            <button
              className={`blog-actions__button ${
                isActive === index ? "active" : ""
              }`}
              type="button"
              title={action.title}
              aria-label={action.ariaLabel}
              onClick={() => handleActionClick(index)} 
            >
              <span className="blog-actions__icon-wrapper">{action.icon && action.icon()}</span>
              <span>{action.info}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
