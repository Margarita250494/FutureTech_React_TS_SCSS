import { blogData } from "./blogsData";
import { useState } from "react";
import {BlogMain, Intro,BlogInfo} from "./blogImport"

export const BlogBody = () => {
  const [isClicked, setIsClicked] = useState<number | null>(null);

  const handleClicked = (index: number) => {
    setIsClicked((prev) => (prev === index ? null : index));
  };
  return (
    <div className="blog-details__body">
      {blogData.map((blog, index) => (
        <div key={index} className="blog-details__body-inner container">
          <div className="blog-details__content">
            <Intro
            divClassName="blog-details__intro full-vw-line-custom full-vw-line-custom--bottom full-vw-line-custom--left"
            h2ClassName="h6"
            title={blog.introTitle}
            intro={blog.introInfo}
            reverse={false}
            />
            <BlogMain
              mainTitle={blog.mainTitle}
              mainInfo={blog.mainInfo}
              subMainTitle={blog.subMainTitle}
              subMainInfo={blog.subMainInfo}
              isExpanded={isClicked === index}
              onToggle={() => handleClicked(index)}
            />
          </div>
          <BlogInfo
          actions={blog.actions}
          summary={blog.summary}
          />
        </div>
      ))}
    </div>
  );
};