import { LikeIcon, Repost, WatchIcon } from "@/assets/icons/icons";
import { Blog } from "@/shared/interfaces";

export const blogData: Array <Blog> = [
  {
    introTitle: "Introduction",
    introInfo:
      "Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.",
    mainTitle: "Artificial Intelligence (AI)",
    mainInfo: {
      info1:
        "Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      info2:
        "Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
    subMainTitle: "Predictive Analytics and Disease Prevention",
    subMainInfo: {
      subInfo1:
        "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.",
      subInfo2:
        "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.",
      subInfo3:
        "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.",
      subInfo4:
        "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.",
    },
    actions: [
      {
        title: "like/deslike",
        ariaLabel: "",
        icon: LikeIcon,
        info: "24.5k",
      },
      {
        title: "watch",
        ariaLabel: "watch",
        icon: WatchIcon,
        info: "50k",
      },
      {
        title: "repost",
        ariaLabel: "repost",
        icon: Repost,
        info: "206",
      },
    ],
    summary:[
        {
            key:"Publication Date",
            value:"October 15, 2023",
            dateTime:"2023-10-15"
        },
        {
            key:"Category",
            value:"Healthcare",
        },
        {
            key:"Reading Time",
            value:"10 Min",
        },
        {
            key:"Author Name",
            value:"Dr. Emily Walker",
        },
        {
            contentsTitle:"Table of Contents",
            contentsList:[
                {
                    content:"Introduction"
                },
                {
                    content:"AI in Diagnostic Imaging"
                },
                {
                    content:"Predictive Analytics and Disease Prevention"
                },
                {
                    content:"Personalized Treatment Plans"
                },
                {
                    content:"Drug Discovery and Research"
                },
                {
                    content:"AI in Telemedicine"
                },
                {
                    content:"Ethical Considerations"
                },
                {
                    content:"The Future of AI in Healthcare"
                },
                {
                    content:"Conclusion"
                },

            ]
        }

    ]
  },
];
