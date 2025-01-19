type Props = {
  title: string;
  description: string;
};

type CardProps = {
  data: Props;
};

export const CardCell = ({ data }: CardProps) => {
  return (
    <div className="card__cell tile">
      {data.title && <h4 className="card__cell-title h5">{data.title}</h4>}
      {data.description && (
        <p className="card__cell-description">{data.description}</p>
      )}
    </div>
  );
};

