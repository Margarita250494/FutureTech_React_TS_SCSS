export interface LinkData {
    to: string;
    name: string;
    mainLink?: object;
    badge?: string;
}
export interface FooterMenuData {
    mainLink: LinkData;
    subLinks: LinkData[];
}
export interface SocialLink {
    href: string;
    icon?: () => JSX.Element;
    label: string;
}
export interface Metrics {
    title: string;
    value: string;
    sign: string;
}
export interface TeamMember {
    name: string;
    img: string;
}
export interface Advantages {
    icon: string;
    title: string;
    subtitle: string;
    detail: string;
}
export interface Section {
    title: string;
    description: string;
}
export interface FeatureSections {
    img: string,
    title: string,
    description: string,
    className: string,
    data: Section[],
};
export interface TabConfig {
    page: string;
    buttons: {
        title: string;
        ariaControls: string;
    }[];
}
export interface BlogPost {
    author: {
        imageSrc: string;
        name: string;
        department: string;
    };
    dateTime: string;
    date: string;
    title: string;
    description: string;
    actions: {
        title: string;
        ariaLabel: string;
        icon: () => JSX.Element;
        info: string;
    }[];
}
// Interface für die Bilder in "extra.images"
interface ExtraImage {
    name: string;
    img: string;
}
// Interface für die "extra"-Eigenschaft
interface ResourceExtra {
    subTitle: string;
    subDescription: string;
    images: ExtraImage[];
}
// Interface für Links in den "tiles"
interface TileLink {
    href: string;
    icon: string;
    span: string;
}
// Interface für die einzelnen "tiles"
interface CardTile {
    subtitle: string;
    description: string;
    className: string;
    link?: TileLink; // Optional, da nicht alle Tiles Links enthalten
}
// Interface für "cardCellBigData"
interface CardCellBigData {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    tiles: CardTile[];
}
// Hauptinterface für ein Resource-Objekt
export interface Resource {
    icon: string;
    title: string;
    description: string;
    link: string;
    extra: ResourceExtra;
    cardCellBigData: CardCellBigData;
}

export interface Review{
    img: string,
    name:string,
    department:string,
    blockquote:string,
    rating: number,
}

export interface News{
    id:number,
    isMain: boolean;
    img: string;
    width: string;
    height: string;
    title: string;
    description: string;
    summary?: {
        key:string,
        value:string,
        datetime?:string,
        isTime?:boolean
    }[];
    actions: {
        title: string;
        ariaLabel: string;
        icon: () => JSX.Element;
        info: string;
    }[];
}

export interface Video {
    video:string,
    poster:string,
    duration:string,
    title: string,
    description:string
}