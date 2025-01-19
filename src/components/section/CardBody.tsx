type Tile = {
  subtitle: string;
  description: string;
  className: string;
  link?: {
    href: string;
    icon: string;
    span: string;
  };
};

type Props = {
  title: string;
  description: string;
  src: string;
  tiles: Tile[];
};

export const CardBody = ({
  title,
  description,
  src,
  tiles,
}: Props) => {
  return (
    <div className="card__body">
      <div className="card__grid card__grid--2-cols-alt">
        
        <div className="card__cell">
          <h3 className="card__cell-title h5">{title}</h3>
        </div>

        <div className="card__cell">
          <p className="card__cell-description">{description}</p>
        </div>

        <div className="card__cell card__cell--wide">
          <img
            className="card__cell-image"
            src={src}
            alt=""
            width="917"
            height="332"
            loading="lazy"
          />
        </div>

        {tiles.map((tile, index) => (
          <div key={index} className={tile.className}>
            <h4 className="card__cell-subtitle">{tile.subtitle}</h4>
            <p className="card__cell-description subDescription h6">
              {tile.description}
            </p>
            {tile.link && (
              <a className="card__cell-link button" href={tile.link.href}>
                <span className="icon">
                  {tile.link.span}
                <img
                  className="icon--yellow-eye"
                  src={tile.link.icon}
                  alt=""
                />
                </span>
                
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


/**
 * <div className="card__cell tile">
          <h4 className="card__cell-subtitle">{subtitle}</h4>
          <p className="card__cell-description subDescription h6">
            {subDescription}
          </p>
        </div>

        <div className="card__cell tile">
          <h4 className="card__cell-subtitle subtitle_2">{subtitle_2}</h4>
          <p className="card__cell-description subDescription_2 h6">
            {subDescription_2}
          </p>
          <a className="card__cell-link button" href="/">
            <span className="icon">Preview</span>
            <img className="icon--yellow-eye" src={eye} alt="" />
          </a>
        </div>

        <div className="card__cell card__cell--wide tile">
          <h4 className="card__cell-subtitle">{subtitle_3}</h4>
          <p className="card__cell-description h6">{subDescription_3}</p>
        </div>
 */