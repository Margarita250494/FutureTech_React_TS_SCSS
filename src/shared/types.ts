export interface LinkData {
  to: string;
  name: string;
  mainLink?: object;
  badge?: string;
}
export interface FooterMenuData {
  mainLink: LinkData; // Der Hauptlink
  subLinks: LinkData[]; // Array von Unterlinks
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
