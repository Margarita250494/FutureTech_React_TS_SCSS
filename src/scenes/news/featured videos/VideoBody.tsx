import { videoData } from "../newsData"
import { VideoCard } from "./VideoCard"


export const VideoBody = () => {
  return (
    <div className="section__body">
        <ul className="bordered-grid bordered-grid--2-cols container">
            {videoData.map((video, index)=>(
                <li key={index} className="bordered-grid__item">
                    <VideoCard
                    video={video.video}
                    poster={video.poster}
                    duration={video.duration}
                    title={video.title}
                    description={video.description}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

