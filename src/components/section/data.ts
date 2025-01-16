import { Section } from "@/shared/types"
import icon1 from "@/assets/icons/feature/1.svg";
import icon2 from "@/assets/icons/feature/2.svg";

import john from "@/assets/images/team/Image-2.png"
import sara from "@/assets/images/team/Image-3.png"
import astronomer from "@/assets/images/team/Image-4.png"

import { LikeIcon } from "@/assets/icons/LikeIcon";
import { Comment } from "@/assets/icons/Comment";
import { Repost } from "@/assets/icons/Repost";
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