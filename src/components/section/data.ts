import { Section } from "@/shared/types"
import icon1 from "@/assets/icons/feature/1.svg";
import icon2 from "@/assets/icons/feature/2.svg";

import john from "@/assets/images/team/Image-2.png"
import sara from "@/assets/images/team/Image-3.png"
import astronomer from "@/assets/images/team/Image-4.png"

import icon_1 from "@/assets/icons/resources/icon-1.svg"
import icon_2 from "@/assets/icons/resources/Icon-2.svg"

import image1 from '@/assets/images/team/Image.png'
import image2 from '@/assets/images/team/Image-2.png'
import image3 from '@/assets/images/team/Image-3.png'
import image4 from '@/assets/images/team/Image-4.png'

import image5 from '@/assets/images/team/image_5.png'
import image6 from '@/assets/images/team/image_6.png'
import image7 from '@/assets/images/team/image_7.png'
import image8 from '@/assets/images/team/image_8.png'

import { LikeIcon } from "@/assets/icons/LikeIcon";
import { Comment } from "@/assets/icons/Comment";
import { Repost } from "@/assets/icons/Repost";

import eye from "@/assets/icons/resources/yellow-eye.svg"
import details1 from "@/assets/images/resources/details-1.jpg"
import details2 from "@/assets/images/resources/details-2.jpg"
/**
 * Scene: HOME => feature/FeatureSection
 */
export const futureTechnologyBlog: Array <Section> = [
    {
        title:"Quantity",
        description:"Over 1,000 articles on emerging tech trends and breakthroughs."
    },
    {
        title:"Variety",
        description:"Articles cover fields like AI, robotics, biotechnology, and more."
    },
    {
        title:"Frequency",
        description:"Fresh content added daily to keep you up to date."
    },
    {
        title:"Authoritative",
        description:"Written by our team of tech experts and industry professionals."
    },
]
export const researchInsightsBlogs: Array <Section> = [
    {
        title:"Depth",
        description:"500+ research articles for in-depth understanding."
    },
    {
        title:"Graphics",
        description:"Visual aids and infographics to enhance comprehension."
    },
    {
        title:"Trends",
        description:"Explore emerging trends in future technology research."
    },
    {
        title:"Contributors",
        description:"Contributions from tech researchers and academics."
    },
]
export const featureSectionsData = [
  {
    img: icon1,
    title: "Future Technology Blog",
    description: "Stay informed with our blog section dedicated to future technology.",
    className: "card__grid--2-cols",
    data: futureTechnologyBlog,
  },
  {
    img: icon2,
    title: "Research Insights Blogs",
    description: "Dive deep into future technology concepts with our research section.",
    className: "card__grid--2-cols",
    data: researchInsightsBlogs,
  },
];

export const tabsButton = [
    {
        page: "home",
    buttons: [
      { title: "All", ariaControls: "tabpanel-1" },
      { title: "Quantum Computing", ariaControls: "tabpanel-2" },
      { title: "AI Ethics", ariaControls: "tabpanel-3" },
      { title: "Space Exploration", ariaControls: "tabpanel-4" },
      { title: "Biotechnology", ariaControls: "tabpanel-5" },
      { title: "Renewable Energy", ariaControls: "tabpanel-6" },
    ],
    },
    {
        page: "news",
        buttons:[
            {title:"All",ariaControls: "tabpanel-7"},
            {title:"Technology",ariaControls: "tabpanel-8"},
            {title:"Politics",ariaControls: "tabpanel-9"},
            {title:"Health",ariaControls: "tabpanel-10"},
            {title:"Environment",ariaControls: "tabpanel-11"},
            {title:"Sports",ariaControls: "tabpanel-12"},
        ]
    },

]

export const blogHomeData = [
    {
        author: {
          imageSrc: john,
          name: "John Techson",
          department: "Quantum Computing",
        },
        dateTime: "2023-10-15",
        date: "October 15, 2023",
        title: "The Quantum Leap in Computing",
        description:
          "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
        actions: [
          {
            title: "",
            ariaLabel: "",
            icon: LikeIcon,
            info:"24.5k"
          },
          {
            title: "comment",
            ariaLabel: "comment",
            icon: Comment,
            info:"50"
          },
          {
            title: "repost",
            ariaLabel: "repost",
            icon: Repost,
            info:"20"
          },
        ],

    },
    {
        author: {
          imageSrc: sara,
          name: "Sarah Ethicist",
          department: "AI Ethics",
        },
        dateTime: "2023-11-5",
        date: "November 5, 2023",
        title: "The Ethical Dilemmas of AI",
        description:
          "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency",
        actions: [
          {
            title: "",
            ariaLabel: "",
            icon: LikeIcon,
            info:"32k"
          },
          {
            title: "comment",
            ariaLabel: "comment",
            icon: Comment,
            info:"72"
          },
          {
            title: "repost",
            ariaLabel: "repost",
            icon: Repost,
            info:"18"
          },
        ],

    },
    {
        author: {
          imageSrc: astronomer,
          name: "Astronomer X",
          department: "Space Exploration",
        },
        dateTime: "2023-12-10",
        date: "December 10, 2023",
        title: "The Mars Colonization Challenge",
        description:
          "Exploring the technical and logistical challenges of human colonization on Mars.",
        actions: [
          {
            title: "",
            ariaLabel: "",
            icon: LikeIcon,
            info:"20k"
          },
          {
            title: "comment",
            ariaLabel: "comment",
            icon: Comment,
            info:"31"
          },
          {
            title: "repost",
            ariaLabel: "repost",
            icon: Repost,
            info:"12"
          },
        ],

    },
    
]

export const resourcesData = [
    {
      icon: icon_1,
      title:"Ebooks",
      description:"Explore our collection of ebooks covering a wide spectrum of future technology topics.",
      link:"Download Ebooks Now",
      extra:{
        subTitle:"Downloaded By",
        subDescription:"10k + Users",
        images: [
          { name: "Alice", img: image1 },
          { name: "Bob", img: image2 },
          { name: "Charlie", img: image3 },
          { name: "David", img: image4 }
        ]
      },
      cardCellBigData: {
        title: "Variety of Topics",
        description: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
        imageSrc: details1,
        imageAlt: "",
        tiles: [
          { 
            subtitle: "Total Ebooks", 
            description: "Over 100 ebooks", 
            className:"card__cell tile" 
          },
          {
            className:"card__cell tile",
            subtitle: "Download Formats",
            description: "PDF format for access.",
            link: { href: "/", icon: eye, span:"Preview" }
          },
          { 
            className: "card__cell card__cell--wide tile",
            subtitle: "Average Author Expertise", 
            description: "Ebooks are authored by renowned experts with an average of 15 years of experience" }
        ]
      }
    },
    {
      icon: icon_2,
      title:"Whitepapers",
      description:"Dive into comprehensive reports and analyses with our collection of whitepapers.",
      link:"Download Whitepapers Now",
      extra:{
        subTitle:"Downloaded By",
        subDescription:"10k + Users",
        images: [
          { name: "Alice", img: image5 },
          { name: "Bob", img: image6 },
          { name: "Charlie", img: image7 },
          { name: "David", img: image8 }
        ]
      },
      cardCellBigData: {
        title: "Topics Coverage",
        description: "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
        imageSrc: details2,
        imageAlt: "",
        tiles: [
          { 
            subtitle: "Total Whitepapers", 
            description: "Over 50 whitepapers", 
            className:"card__cell tile" },
          {
            className:"card__cell tile",
            subtitle: "Download Formats",
            description: "PDF format for access.",
            link: { href: "/", icon: eye, span:"Preview" }
          },
          { 
            className: "card__cell card__cell--wide tile",
            subtitle: "Average Author Expertise", 
            description: "Whitepapers are authored by subject matter experts with an average of 20 years of experience." 
          }
        ]
      }

    }
]