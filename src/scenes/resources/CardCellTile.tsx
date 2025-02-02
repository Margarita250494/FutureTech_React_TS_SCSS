type Props = {
  title: string;
  description: string;
  dateTime?: string;
  wideOnMobile?: boolean;
};

export const CardCellTile = ({
  title,
  description,
  dateTime,
  wideOnMobile,
}: Props) => {
  return (
    <div
      className={`card__cell tile ${
        wideOnMobile ? "card__cell--wide-on-mobile-s" : ""
      }`}
    >
      <p className="card__cell-title">{title}</p>
      <p className="card__cell-description h6">
        {dateTime ? (
          <time dateTime={dateTime}>{description}</time>
        ) : (
          description
        )}
      </p>
    </div>
  );
};
