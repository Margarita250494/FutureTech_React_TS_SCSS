import { BlogCardProps } from "@/shared/types";
import { BlogCard } from "./BlogCard";
  
  type TabsBodyProps = {
    blogs: BlogCardProps[];
  };

export const TabsBody = ({ blogs }: TabsBodyProps) => {
  return (
    <div className="tabs__body">

      <div
        className="tabs__content"
        id="all"
        aria-controls="tabpanel-1"
        tabIndex={0}
      >
        <ul className="list">
            {blogs.map((blog,index)=>(
            <li key={index} className="list__item">
                <BlogCard {...blog}/>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
