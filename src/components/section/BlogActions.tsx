import { ActionProps } from "@/shared/types";

export const BlogActions = ({ actions }: { actions: ActionProps[] }) => {
  return (
    <div className="blog-card__actions actions">
      <ul className="blog-actions__list">
        {actions.map((action,index) => (
          <li className="blog-actions__item" key={index}>
            <button
              className="blog-actions__button"
              type="button"
              title={action.title}
              aria-label={action.ariaLabel}
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
