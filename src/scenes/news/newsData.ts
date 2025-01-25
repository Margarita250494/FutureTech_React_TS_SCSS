import { image1, image2, image3, image4 } from "@/assets/images/news/newsImageExport";
import { LikeIcon, Repost, Comment } from "@/assets/icons/icons";
import { News, BlogPost, Video } from "@/shared/interfaces";
import { image2 as john,image3 as sara,image4 as astronomer} from "@/assets/images/team/team";
import video from "@/assets/video/SampleVideo_1280x720_1mb.mp4"
import { poster1, poster2, poster3,poster4 } from "@/assets/images/news/newsImageExport";

export const newsCardData: Array <News> = [
  {
    id: 1,
    isMain: true,
    img: image1,
    width: "515",
    height: "427",
    title: "Global Climate Summit Addresses Urgent Climate Action",
    description:
      "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
    summary: [
      {
        key: "Category",
        value: "Environment",
      },
      {
        key: "Publication Date",
        value: "October 10, 2023",
        datetime:"2023-10-10",
        isTime: true,
      },
      {
        key: "Author",
        value: "Jane Smith",
      },
    ],
    actions: [
      {
        title: "like/deslike",
        ariaLabel: "",
        icon: LikeIcon,
        info: "14k",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "204",
      },
    ],
  },
  {
    id: 2,
    isMain: false,
    img: image2,
    width: "512",
    height: "222",
    title: "A Decisive Victory for Progressive Policies",
    description:
      "Politics",
    actions: [
      {
        title: "like/deslike",
        ariaLabel: "",
        icon: LikeIcon,
        info: "2.2k",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "60",
      },
    ],
  },
  {
    id: 3,
    isMain: false,
    img: image3,
    width: "512",
    height: "222",
    title: "Tech Giants Unveil Cutting-Edge AI Innovations",
    description:
      "Technology",
    actions: [
      {
        title: "like/deslike",
        ariaLabel: "",
        icon: LikeIcon,
        info: "6k",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "92",
      },
    ],
  },
  {
    id: 4,
    isMain: false,
    img: image4,
    width: "512",
    height: "222",
    title: "COVID-19 Variants",
    description:
      "Health",
    actions: [
      {
        title: "like/deslike",
        ariaLabel: "",
        icon: LikeIcon,
        info: "10k",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "124",
      },
    ],
  },
  
];
export const blogNewsData: Array <BlogPost> = [
  {
    author: {
      imageSrc: john,
      name: "John Techson",
      department: "Technology",
    },
    dateTime: "2023-10-15",
    date: "October 15, 2023",
    title: "Tech Giants Announce New Product Line",
    description:
      "Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape",
    actions: [
      {
        title: "like/deslike",
        ariaLabel: "",
        icon: LikeIcon,
        info: "24.5k",
      },
      {
        title: "comment",
        ariaLabel: "comment",
        icon: Comment,
        info: "50",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "20",
      },
    ],
  },
  {
    author: {
      imageSrc: sara,
      name: "Sarah Ethicist",
      department: "Technology",
    },
    dateTime: "2023-11-5",
    date: "November 5, 2023",
    title: "The Future of Autonomous Vehicles",
    description:
      "An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.",
    actions: [
      {
        title: "",
        ariaLabel: "",
        icon: LikeIcon,
        info: "32k",
      },
      {
        title: "comment",
        ariaLabel: "comment",
        icon: Comment,
        info: "72",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "18",
      },
    ],
  },
  {
    author: {
      imageSrc: astronomer,
      name: "Astronomer X",
      department: "Technology",
    },
    dateTime: "2023-12-10",
    date: "December 10, 2023",
    title: "Tech Startups Secure Record Funding",
    description:
      "An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.",
    actions: [
      {
        title: "",
        ariaLabel: "",
        icon: LikeIcon,
        info: "20k",
      },
      {
        title: "comment",
        ariaLabel: "comment",
        icon: Comment,
        info: "31",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "12",
      },
    ],
  },
];
export const videoData: Array <Video> = [
  {
    video:video,
    poster:poster1,
    duration:"2.30 min",
    title: "Mars Exploration: Unveiling Alien Landscapes",
    description:"Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars."
  },
  {
    video:video,
    poster:poster2,
    duration:"2.30 min",
    title: "Blockchain Explained: A Revolution in Finance",
    description:"Delve into the world of blockchain technology and its transformative impact on the financial industry."
  },
  {
    video:video,
    poster:poster3,
    duration:"2.30 min",
    title: "Breaking the Silence: Mental Health Awareness in the Workplace",
    description:"An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being."
  },
  {
    video:video,
    poster:poster4,
    duration:"2.30 min",
    title: "Revolutionizing Investment Strategies",
    description:"An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction."
  },

]
