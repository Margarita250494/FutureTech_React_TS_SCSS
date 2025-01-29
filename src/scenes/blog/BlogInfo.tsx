import { BlogActions,SummaryList } from "@/components/section/sectionImport";
import { BlogInfoProps } from "@/shared/types";

export const BlogInfo = ({actions,summary}:BlogInfoProps) => {
  return (
    <div className="blog-details__info">
      <div className="blog-details__actions blog-actions full-vw-line-custom full-vw-line-custom--bottom full-vw-line-custom--right">
        <BlogActions actions={actions} />
      </div>
      <div className="blog-details__summary summary summary--2-cols">
        <SummaryList items={summary} />
      </div>
    </div>
  );
};
