import { Metrics, TeamMember, Advantages } from "@/shared/types"
import image1 from '@/assets/images/team/Image.png'
import image2 from '@/assets/images/team/Image-2.png'
import image3 from '@/assets/images/team/Image-3.png'
import image4 from '@/assets/images/team/Image-4.png'

import icon1 from '@/assets/icons/adventages/icon-1.svg'
import icon2 from '@/assets/icons/adventages/icon-2.svg'
import icon3 from '@/assets/icons/adventages/icon-3.svg'


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