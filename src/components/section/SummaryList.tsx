import { SummaryItem } from "@/shared/interfaces";

interface SummaryListProps {
  items: SummaryItem[]; 
}
export const SummaryList = ({ items }: SummaryListProps) => {
  return (
    <dl className="summary__list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`summary__item ${
            item.contentsTitle ? "summary__item--wide" : ""
          }`}
        >
          {item.key ? (
            <>
              <dt className="summary__key">{item.key}</dt>
              <dd className="summary__value">
                {item.dateTime ? (
                  <time dateTime={item.dateTime}>{item.value}</time>
                ) : (
                  item.value
                )}
              </dd>
            </>
          ) : item.contentsTitle ? (
            <>
              <dt className="summary__key">{item.contentsTitle}</dt>
              <dd className="summary__value">
                <div className="table-of-contents">
                  <ul className="table-of-contents__list">
                    {item.contentsList?.map((content, index) => (
                      <li key={index} className="table-of-contents__item">
                        {content.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </dd>
            </>
          ) : null}
        </div>
      ))}
    </dl>
  );
};
