import { BlogActions } from "@/components/section/BlogActions";
import { blogData } from "./blogsData";
import arrowGray from '@/assets/icons/arrow-down_gray.svg'
import { useState } from "react";

export const BlogBody = () => {

  const [isClicked, setIsClicked] = useState <number | null>(null);

  const handleClicked = (index: number) => {
    setIsClicked((prev) => (prev === index ? null : index));
  };
  return (
    <div className="blog-details__body">
      {blogData.map((blog, index) => (
        <div key={index} className="blog-details__body-inner container">
          <div className="blog-details__content">
            <div className="blog-details__intro full-vw-line-custom full-vw-line-custom--bottom full-vw-line-custom--left">
              <h2 className="h6">{blog.introTitle}</h2>
              <p>{blog.introInfo}</p>
            </div>
            <div className={`blog-details__main expandable-content ${
                isClicked === index ? "expanded" : ""
              }`}>
              <h2 className="h4">{blog.mainTitle}</h2>
              {Object.values(blog.mainInfo).map((info, infoIndex) => (
                <p key={`main-info-${infoIndex}`}>{info}</p>
              ))}

              <h2 className="h4">{blog.subMainTitle}</h2>
              {Object.values(blog.subMainInfo).map((subInfo, subInfoIndex) => (
                <p key={`sub-info-${subInfoIndex}`}>{subInfo}</p>
              ))}
              <button
                className="blog-details__read-full-button button expandable-content__button"
                type="button"
                onClick={() => handleClicked(index)}
              >
                <span className="icon">
                  Read Full Blog
                  <img className="icon--gray-arrow-down" src={arrowGray} alt="" />
                </span>
              </button>
            </div>
          </div>

          <div className="blog-details__info">
            <div className="blog-details__actions blog-actions full-vw-line-custom full-vw-line-custom--bottom full-vw-line-custom--right">
              <BlogActions actions={blog.actions} />
            </div>
            <div className="blog-details__summary summary summary--2-cols">
              <dl className="summary__list">
                {blog.summary.map((item, index) => (
                  <div key={index} 
                  className={`summary__item ${item.contentsTitle ? "summary__item--wide" : ""}`}
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
                                    {item.contentsList.map((content, index)=>(
                                        <li key={index} className="table-of-contents__item">{content.content}</li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </dd>
                      </>
                    ) : null}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
