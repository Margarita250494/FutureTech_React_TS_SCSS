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
  to: string;
  
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


//components => section => HeroAltHeader.tsx
export type HeroAltHeaderProps = {
  id:string,
  title:string,
  spanTitle:string,
  description:string
}

//scenes => news => NewsCard.tsx
export type SummaryProps =
  | {
      key: string; 
      value: string;
      dateTime?: string;
      isTime?: boolean;
      contentsTitle?: undefined; 
      contentsList?: undefined;
    }
  | {
      contentsTitle: string; 
      contentsList: { content: string }[];
      key?: undefined; 
      value?: undefined;
      dateTime?: undefined;
      isTime?: undefined;
    };

export type NewsCardProps = {
  isMain: boolean;
  image: string;
  width: string;
  height: string;
  title: string;
  description: string;
  summary?: SummaryProps[];
  actions: ActionProps[];
}

export type VideoCardProps = {
  video: string;
  poster: string;
  duration: string;
  title: string;
  description: string;
}

export type ButtonIconProps = {
  buttonClassName: string;
  onClick?: () => void;
  text: string;
  imgClassName: string;
  src:string;
}

export type BlogIntroProps = {
  divClassName: string;
  h2ClassName:string;
  title:string;
  intro:string;
  reverse:boolean;
  pClassName?:string;
  id?:string;
}

export type BlogInfoProps = {
  actions: ActionProps[];
  summary: SummaryProps[];
}

export type BlogMainProps = {
  mainTitle: string;
  mainInfo: { [key: string]: string };
  subMainTitle: string;
  subMainInfo: { [key: string]: string };
  isExpanded: boolean;
  onToggle: () => void;
}

export type DescriptionProps = {
  bodyClassName: string;
  titleClassName: string;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  title: string;
  descClassName: string;
  desc: string;
}