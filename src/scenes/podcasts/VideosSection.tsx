import { Header } from "@/components/section/Header"
import { VideoBody } from "../news/featured videos/VideoBody"
import { podcastsVideoData } from "./data"


export const VideosSection = () => {
  return (
    <section className="section" aria-labelledby="podcasts-videos-title">
        <Header
        id="podcasts-videos-title"
        to="/"
        subtitle="Stay Informed with Fresh Content"
        title="Latest Podcast Episodes"
        />
        <VideoBody video={podcastsVideoData} cols3={true} width="470" height="290" small={true}/>
    </section>
  )
}

