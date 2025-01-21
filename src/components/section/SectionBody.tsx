import { CardCell } from "./CardCell";
import { SectionDataProps } from "@/shared/types";
import { classNames } from "@/shared/constants";
import { CardPreview } from "./CardPreview";

export const SectionBody = ({
  img,
  title,
  description,
  className,
  data,
}: SectionDataProps) => {
  
  return (
    <ul className="list">
      <li className="list__item">
        <div className="card container">
          <CardPreview
          img={img}
          title={title}
          description={description}/>
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
