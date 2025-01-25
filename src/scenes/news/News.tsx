import { Helmet } from "react-helmet-async"
import { HeroAltSection } from "./hero/HeroAltSection"
import { NewsBlogSection } from "./blog/NewsBlogSection"
import { FeaturedVideosSection } from "./featured videos/FeaturedVideosSection"
export const News = () => {
    return (
      <>
      <Helmet><title>Future Tech | News</title></Helmet>
      <HeroAltSection/>
      <NewsBlogSection/>
      <FeaturedVideosSection/>
      </>
      
    )
  }