import { PlayButton } from "@/assets/images/news/PlayButton";
import { VideoCardProps } from "@/shared/types";
import { useRef, useState } from "react";

export const VideoCard = ({
  video,
  poster,
  duration,
  title,
  description,
}: VideoCardProps) => {
    
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayButtonClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        videoRef.current.controls = true;
      } else {
        videoRef.current.pause();
        videoRef.current.controls = false;
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="video-card">
      <div className="video-card__player video-player">
        <video
          ref={videoRef}
          src={video}
          className="video-player__video"
          width="718"
          height="412"
          poster={poster}
        ></video>

        <div className={`video-player__panel ${isPlaying ? "" : "active"}`}>
          <button
            className="video-player__play-button"
            type="button"
            aria-label="Play video"
            title="Play video"
            onClick={onPlayButtonClick}
          >
            <PlayButton />
          </button>
          <div className="video-player__duration">{duration}</div>
        </div>
      </div>
      <div className="video-card__body">
        <h3 className="video-card__title h5">{title}</h3>
        <div className="video-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
