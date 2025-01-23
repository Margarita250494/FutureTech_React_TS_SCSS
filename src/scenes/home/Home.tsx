import { Helmet } from "react-helmet-async";
import { AboutSection } from "./about/AboutSection";
import { BlogSection } from "./blog/BlogSection";
import { FeatureSection } from "./feature/FeatureSection";
import { HeroSection } from "./hero/HeroSection";
import { ResourcesSection } from "./resources/ResourcesSection";
import { ReviewsSection } from "./reviews/ReviewsSection";


export const Home = () => {
  return (
    <>
      <Helmet><title>Future Tech | Home</title></Helmet>
      <HeroSection />
      <FeatureSection />
      <BlogSection />
      <ResourcesSection />
      <ReviewsSection />
      <AboutSection/>
    </>
  );
};
