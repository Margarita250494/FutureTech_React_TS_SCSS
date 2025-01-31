import { Description } from "@/components/section/Description";
import { VideoCardPlayer } from "@/components/section/VideoCardPlayer";
import { VideoCardProps } from "@/shared/types";


export const VideoCard = ({
  video,
  poster,
  duration,
  title,
  description,
}: VideoCardProps) => {
    
  return (
    <div className="video-card">
      <VideoCardPlayer
      className="video-card__player video-player"
      video={video}
      width="718"
      height="412"
      poster={poster}
      duration={duration}/>
      
      <Description
      bodyClassName="video-card__body"
      h3={true}
      titleClassName="video-card__title h5"
      title={title}
      descClassName="video-card__description"
      desc={description}/>
    </div>
  );
};

