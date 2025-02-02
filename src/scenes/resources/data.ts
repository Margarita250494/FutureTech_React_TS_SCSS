import icon_1 from "@/assets/icons/podcasts/icon_1.svg";
import icon_2 from "@/assets/icons/podcasts/icon_2.svg";
import image_1 from "@/assets/images/podcasts/image_1.jpg";
import image_2 from "@/assets/images/podcasts/image_2.jpg";
import s_image_1 from "@/assets/images/podcasts/s_image_1.jpg"
import s_image_2 from "@/assets/images/podcasts/s_image_2.jpg"
import s_image_3 from "@/assets/images/podcasts/s_image_3.jpg"



export const cardListData = [
    {
      img: icon_1,
      title: "Quantum Computing Whitepaper",
      description: "Provides technical specifications and requirements for implementing quantum computing systems.",
      image: image_1,
      subDesc:"An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.",
      link: "/",
      details: [
        { title: "Publication Date", description: "July 2023", dateTime: "2023-07" },
        { title: "Category", description: "Quantum Computing" },
        { title: "Author", description: "Dr. Quantum", wideOnMobile: true },
      ],
    },
    {
        img: icon_2,
        title: "Space Exploration Whitepaper",
        description: "Explores Mars colonization, asteroid resource potential, and space tourism.",
        image: image_2,
        subDesc:"An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.",
        link: "/",
        details: [
          { title: "Publication Date", description: "September 2023", dateTime: "2023-09" },
          { title: "Category", description: "Space Exploration" },
          { title: "Author", description: "FutureTech Space Division", wideOnMobile: true },
        ],
      },
  ];

  export const reportCardData = [
    {
      image: s_image_1,
      title: "FutureTech Trends 2024",
      description: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
      detailsLink: "/",
      downloadLink: "/",
    },
    {
      image: s_image_2,
      title: "Space Exploration Ebook",
      description: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
      detailsLink: "/",
      downloadLink: "/",
    },
    {
      image: s_image_3,
      title: "Quantum Computing Whitepaper",
      description: "An in-depth whitepaper exploring the principles, applications.",
      detailsLink: "/",
      downloadLink: "/",
    },
  ];