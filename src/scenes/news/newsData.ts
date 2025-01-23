import { image1, image2, image3, image4 } from "@/assets/images/news/newsImageExport";
import { LikeIcon, Repost } from "@/assets/icons/icons";
import { News } from "@/shared/interfaces";

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
