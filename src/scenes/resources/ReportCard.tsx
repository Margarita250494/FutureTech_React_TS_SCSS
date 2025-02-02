

type ReportCardProps = {
    image: string;
    title: string;
    description: string;
    detailsLink: string;
    downloadLink: string;
  };
export const ReportCard = ({ image, title, description, detailsLink, downloadLink }:ReportCardProps) => {
  return (
    <li className="bordered-grid__item">
      <div className="report-card">
        <img className="report-card__image" src={image} alt="" width="470" height="290" loading="lazy" />
        <div className="report-card__body">
          <h3 className="report-card__title h6">{title}</h3>
          <div className="report-card__description">
            <p>{description}</p>
          </div>
        </div>
        <div className="report-card__actions">
          <a className="report-card__details-link button" href={detailsLink}>View Details</a>
          <a className="report-card__download-link button button--dark-gray" href={downloadLink} download>Download PDF Now</a>
        </div>
      </div>
    </li>
  )
}

