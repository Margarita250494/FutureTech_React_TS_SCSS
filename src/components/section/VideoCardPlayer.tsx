import { PlayButton } from "@/assets/images/news/PlayButton";
import { useRef, useState } from "react";

type Props = {
    video:string;
    poster:string;
    duration?:string;
    width:string;
    height:string;
    className:string;
    isCenter?:boolean;
}

export const VideoCardPlayer = ({video, poster, duration,width,height,className,isCenter}: Props) => {
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
    <div className={className}>
      <video
        ref={videoRef}
        src={video}
        className="video-player__video"
        width={width}
        height={height}
        poster={poster}
      ></video>

      <div className={`video-player__panel ${isPlaying ? "" : "active"} ${isCenter ? "video-player__panel--center" : ""}`}>
        <button
          className="video-player__play-button"
          type="button"
          aria-label="Play video"
          title="Play video"
          onClick={onPlayButtonClick}
        >
          <PlayButton />
        </button>
        {duration && (<div className="video-player__duration">{duration}</div>)}
      </div>
    </div>
  );
};

