import { LinkImgArrow } from "@/components/LinkImgArrow";
import { Description } from "@/components/section/Description";
import { VideoCardPlayer } from "@/components/section/VideoCardPlayer";
import { VideoCardProps } from "@/shared/types";


export const VideoCard = ({
  video,
  poster,
  duration,
  title,
  description,
  link,
  width,
  height,
  small

}: VideoCardProps) => {
    
  return (
    <div className="video-card">
      <VideoCardPlayer
      className="video-card__player video-player"
      video={video}
      width={width}
      height={height}
      poster={poster}
      duration={duration}
      small={small}/>
      
      <Description
      bodyClassName="video-card__body"
      h3={true}
      titleClassName="video-card__title h5"
      title={title}
      descClassName="video-card__description"
      desc={description}/>

      {link && (
        <LinkImgArrow
        className="video-card__link button"
        children="Listen Podcast"
        href="/"
        />
      )}
    </div>
  );
};


