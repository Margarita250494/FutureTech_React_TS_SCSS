import { useLocation } from "react-router-dom";
import { CardCell } from "./CardCell";
import { SectionData } from "@/shared/types";
import { classNames } from "@/shared/constants";

type Props = SectionData;

export const SectionBody = ({
  img,
  title,
  description,
  className,
  data,
}: Props) => {
  const location = useLocation();
  const isResourcesPage = location.pathname === "/resources";

  return (
    <ul className="list">
      <li className="list__item">
        <div className="card container">
          <div className="card__preview">
            <div className="card__preview-main">
              <img
                src={img}
                alt="/"
                className="card__preview-icon"
                width="80"
                height="80"
                loading="lazy"
              />
              <div className="card__preview-info">
                <h3 className="card__preview-title">{title}</h3>
                <div className="card__preview-description">
                  <p>{description}</p>
                </div>
              </div>
            </div>
            {isResourcesPage ? <div className="card__preview-extra"></div> : ""}
          </div>
          <div className="card__body">
            <div className={classNames("card__grid", className)}>
              {data.map((item, index) => (
                <CardCell key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
