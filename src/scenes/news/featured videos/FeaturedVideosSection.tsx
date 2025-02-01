import { Header } from "@/components/section/Header"
import { VideoBody } from "./VideoBody"
import { videoData } from "../newsData"

export const FeaturedVideosSection = () => {
  return (
    <section className="section" aria-labelledby="videos-title">
        <Header
        id="videos-title"
        subtitle="Featured Videos"
        title="Visual Insights for the Modern Viewer"
        to="/"
        link="View All"
        />
        <VideoBody video={videoData} cols2={true} width="718" height="412"/>
    </section>
  )
}

