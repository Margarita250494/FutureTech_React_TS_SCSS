import { Metrics, TeamMember, Advantages } from "@/shared/interfaces"
import { image1,image2,image3,image4 } from "@/assets/images/team/team"
import { icon1,icon2,icon3 } from "@/assets/icons/adventages/adventages"

export const metricsData: Array <Metrics> = [
    {
        title:"Resources available",
        value:"300",
        sign: "+"
    },
    {
        title:"Total Downloads",
        value:"12k",
        sign: "+"
    },
    {
        title:"Active Users",
        value:"10k",
        sign: "+"
    },
    {
        title:"Countries Accesses Our Content",
        value:"100",
        sign: "+"
    },
]

export const team: Array <TeamMember> = [
    {
        name: "Rob",
        img:image1,
    },
    {
        name: "Bob",
        img:image2,
    },
    {
        name: "Angela",
        img:image3,
    },
    {
        name: "David",
        img:image4,
    },

]

export const advantages: Array <Advantages> = [
    {
        icon:icon1,
        title:"Latest News Updates",
        subtitle:"Stay Current",
        detail: "Over 1,000 articles published monthly"
    },
    {
        icon:icon2,
        title:"Expert Contributors",
        subtitle:"Trusted Insights",
        detail: "50+ renowned AI experts on our team"
    },
    {
        icon:icon3,
        title:"Global Readership",
        subtitle:"Worldwide Impact",
        detail: "2 million monthly readers"
    },
]