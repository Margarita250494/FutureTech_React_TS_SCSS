import { CardCell } from "./CardCell";
import { SectionData } from "@/shared/types";
import { classNames } from "@/shared/constants";
import { CardPreview } from "./CardPreview";

type Props = SectionData;

export const SectionBody = ({
  img,
  title,
  description,
  className,
  data,
}: Props) => {
  
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
