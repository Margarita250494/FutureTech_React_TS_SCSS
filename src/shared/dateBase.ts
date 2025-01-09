import { TwitterIcon } from "@/assets/icons/TwitterIcon"
import { LinkData, FooterMenuData, SocialLink } from "./types"
import { LinkedInIcon } from "@/assets/icons/LinkedInIcon"
import { MediumIcon } from "@/assets/icons/MediumIcon"

//Header.tsx => Link.tsx
export const linkDate: Array <LinkData>  =  [
    {
        to: "/",
        name: "Home"
    },
    {
        to: "/news",
        name: "News"
    },
    {
        to: "/podcasts",
        name: "Podcasts"
    },
    {
        to: "/resources",
        name: "Resources"
    },

]

//Footer.tsx => FooterMenu.tsx
export const footerMenuData: FooterMenuData[] = [
    {
        mainLink:{
            to: "/",
            name: "Home",
        },
        subLinks: [
            { to: "/", name: "Features" },
            { to: "/", name: "Blogs" },
            { to: "/", name: "Resources", badge:'New' },
            { to: "/", name: "Testimonials" },
            { to: "/", name: "Contact Us" },
            { to: "/", name: "Newsletter" },
        ],
    },
    {
        mainLink:{
            to: "/news",
            name: "News",
        },
        subLinks: [
            { to: "/", name: "Trending Stories" },
            { to: "/", name: "Featured Videos" },
            { to: "/", name: "Technology" },
            { to: "/", name: "Health" },
            { to: "/", name: "Politics" },
            { to: "/", name: "Environment" },
        ],
    },
    {
        mainLink:{
            to: "/blogs",
            name: "Blogs",
        },
        subLinks: [
            { to: "/", name: "Quantum Computing" },
            { to: "/", name: "AI Ethics" },
            { to: "/", name: "Space Exploration" },
            { to: "/", name: "Biotechnology",badge:'New' },
            { to: "/", name: "Renewable Energy" },
            { to: "/", name: "Biohacking" },
        ],
    },
    {
        mainLink:{
            to: "/podcasts",
            name: "Podcasts",
        },
        subLinks: [
            { to: "/", name: "AI Revolution" },
            { to: "/", name: "AI Revolution", badge:'New' },
            { to: "/", name: "TechTalk AI" },
            { to: "/", name: "AI Conversations" },
        ],
    },
]

export const footerMenuButton: FooterMenuData[] = [
    {
        mainLink:{
            to: "/resources",
            name: "Resources",
        },
        subLinks: [
            { to: "/", name: "Whitepapers" },
            { to: "/", name: "Ebooks" },
            { to: "/", name: "Reports" },
            { to: "/", name: "Research Papers" },
        ],
    },
]

export const footerLinks = [
    { href: "", name: "Terms & Conditions" },
    { href: "", name: "Privacy Policy" },
  ];
  
  export const socialLinks: Array<SocialLink> = [
    {
      href: "https://x.com/?mx=2",
      icon: TwitterIcon,
      label: "Twitter",
    },
    {
      href: "https://medium.com",
      icon: MediumIcon,
      label: "Medium",
    },
    {
      href: "https://www.linkedin.com",
      icon: LinkedInIcon,
      label: "LinkedIn",
    },
  ];