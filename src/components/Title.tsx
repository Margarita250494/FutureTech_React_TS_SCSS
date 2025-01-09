type Props = {
    classNameTitle:string;
    id:string;
    classNameDesc:string;
    title:string;
    desc:string;

};

export const Title = ({classNameTitle, id, classNameDesc,title,desc}: Props) => {
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

