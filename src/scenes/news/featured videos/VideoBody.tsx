import { Video } from "@/shared/interfaces";
import { VideoCard } from "./VideoCard"

type Props = {
  video: Video[];
  cols2?:boolean;
  cols3?:boolean;
  width:string;
  height:string;
  small?:boolean;
}

export const VideoBody = ({video,cols2,cols3,width,height,small}:Props) => {
  return (
    <div className="section__body">
        <ul className={`bordered-grid container ${cols2 && "bordered-grid--2-cols"} ${cols3 && "bordered-grid--3-cols"}`}>
            {video.map((item, index)=>(
                <li key={index} className="bordered-grid__item">
                    <VideoCard
                    video={item.video}
                    poster={item.poster}
                    duration={item.duration}
                    title={item.title}
                    description={item.description}
                    link={!!item.link}
                    width={width}
                    height={height}
                    small={small}
                    />
                </li>
            ))}
        </ul>
    </div>
  )
}

