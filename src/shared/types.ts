import { TeamMember } from "./interfaces";

//components => section => SectionBody.tsx
export type SectionDataProps = {
  img: string;
  title: string;
  description: string;
  className?: string;
  data: { title: string; description: string }[];
};

//components => section => BlogActions.tsx
export type ActionProps = {
  title: string;
  ariaLabel: string;
  icon?: () => JSX.Element;
  info: string;
};

//components => section => BlogCard.tsx
export type BlogCardProps = {
  author: {
    imageSrc: string;
    name: string;
    department: string;
  };
  dateTime: string;
  date: string;
  title: string;
  description: string;
  actions: ActionProps[];
};

//components => header =>ContactUsLink.tsx
export type ContactUsProps = {
    className:string;
    style?: React.CSSProperties
}

//components => header =>Link.tsx
export type LinkProps = {
  closeMenu: () => void;
}

//components => LinkImgArrow.tsx
export type ImgArrowProps = {
    href:string;
    className:string;
    children:React.ReactNode;
};

//components => Title.tsx
export type TitleProps = {
  classNameTitle:string;
  id:string;
  classNameDesc:string;
  title:string;
  desc:string;
};

//components => section => CardBody.tsx
type Tile = {
  subtitle: string;
  description: string;
  className: string;
  link?: {
    href: string;
    icon: string;
    span: string;
  };
};
export type TileProps = {
  title: string;
  description: string;
  src: string;
  tiles: Tile[];
};

//components => section => CardCell.tsx
type Props = {
  title: string;
  description: string;
};
export type CardProps = {
  data: Props;
};

export type CardExtraProps = {
  title: string;
  description: string;
  src: string;
  width:string;
  height:string;
};

//components => section => CardPreview.tsx
export type CardPreviewProps = {
  img: string;
  title: string;
  description: string;
  link?: string;
  href?: string;
  className?: string;
  extra?: { subTitle: string; subDescription: string; images: TeamMember[] };
  people?: TeamMember[];
};

//components => section => Header.tsx
export type SectionHeader = {
  id: string;
  subtitle: string;
  title: string;
  link?: string;
};

//components => section => PersonCard.tsx
export type PersonCardProps = {
  imageSrc: string;
  name: string;
  department: string;
  width:string;
  height:string;
};

//scenes=>home=>hero=>Team.tsx
export type TeamProps = {
  classname: string;
  people: TeamMember[]; 
};
