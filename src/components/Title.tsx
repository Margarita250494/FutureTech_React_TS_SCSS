import { TitleProps } from "@/shared/types";

export const Title = ({classNameTitle, id, classNameDesc,title,desc}: TitleProps) => {
  return (
    <>
      <h1 className={classNameTitle} id={id}>
        {title}
      </h1>
      <div className={classNameDesc}>
        <p>
          {desc}
        </p>
      </div>
    </>
  );
};

