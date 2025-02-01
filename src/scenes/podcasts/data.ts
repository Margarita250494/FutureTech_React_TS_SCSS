import { Podcast,Video } from "@/shared/interfaces";
import {poster1,poster2,s_poster1,s_poster2,s_poster3,s_poster4,s_poster5,s_poster6} from "@/assets/images/podcasts/posterImport"
import video from "@/assets/video/SampleVideo_1280x720_1mb.mp4";
import icon1 from "@/assets/icons/podcasts/1.svg";
import icon2 from "@/assets/icons/podcasts/2.svg"

export const podcasts: Podcast[] = [
    {
      icon: icon1,
      title: "AI Revolution",
      rating: 4,
      host: "Dr. Sarah Mitchell",
      video: video,
      poster: poster1,
      cardCellTitle:"Delves into the transformative impact of AI",
      description:
        "Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.",
      details: [
        { title: "Total Episodes", value: "50" },
        { title: "Average Episode Length", value: "30 min" },
        { title: "Release Frequency", value: "Weekly" },
      ],
    },
    {
        icon: icon2,
      title: "AI Conversations",
      rating: 5,
      host: "Mark Anderson",
      video: video,
      poster: poster2,
      description:
        "Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.",
      cardCellTitle:"Engage in thought-provoking conversations with leading experts.",  
      details: [
        { title: "Total Episodes", value: "40" },
        { title: "Average Episode Length", value: "40 min" },
        { title: "Release Frequency", value: "Monthly" },
      ],
    }
];
export const podcastsVideoData: Array <Video> = [
  {
    video:video,
    poster:s_poster1,
    duration:"2.30 min",
    title: "AI in Healthcare",
    description:"Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    link:"/"
  },
  {
    video:video,
    poster:s_poster2,
    duration:"2.30 min",
    title: "AI Ethics",
    description:"Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    link:"/"
  },
  {
    video:video,
    poster:s_poster3,
    duration:"2.30 min",
    title: "Machine Learning Explained",
    description:"Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    link:"/"
  },
  {
    video:video,
    poster:s_poster4,
    duration:"2.30 min",
    title: "AI and the Future of Work",
    description:"Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    link:"/"
  },
  {
    video:video,
    poster:s_poster5,
    duration:"2.30 min",
    title: "Revolutionizing Investment Strategies",
    description:"Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
    link:"/"
  },
  {
    video:video,
    poster:s_poster6,
    duration:"2.30 min",
    title: "AI in Entertainment",
    description:"David Smith as they explore the influence of AI in the entertainment industry.",
    link:"/"
  },

]