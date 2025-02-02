import { LinkImgArrow } from "@/components/LinkImgArrow";
import { CardCellTile } from "./CardCellTile";
import { CardPreview } from "@/components/section/CardPreview";
import { cardListData, reportCardData } from "./data";
import { ReportCard } from "./ReportCard";

export const List = () => {
  return (
    <>
      <ul className="list">
        {cardListData.map((card, index) => (
          <li key={index} className="list__item">
            <div className="card container">
              <CardPreview
                img={card.img}
                h3={true}
                title={card.title}
                description={card.description}
              />
              <div className="card__body">
                <div className="card__grid card__grid--3-cols-alt">
                  <div className="card__cell card__cell--wide">
                    <img
                      className="card__cell-image"
                      src={card.image}
                      alt=""
                      width="917"
                      height="332"
                      loading="lazy"
                    />
                  </div>
                  <div className="card__cell card__cell--wide">
                    <h4 className="card__cell-title">{card.title}</h4>
                    <p className="card__cell-description">{card.subDesc}</p>
                    <LinkImgArrow
                      className="card__cell-link button button--dark-gray"
                      href={card.link}
                      children="Download PDF Now"
                      download={true}
                    />
                  </div>

                  {card.details.map((item, index) => (
                    <CardCellTile key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="bordered-grid bordered-grid--3-cols container">
        {reportCardData.map((report, index) => (
          <ReportCard key={index} {...report} />
        ))}
      </ul>
    </>
  );
};

export default List;
