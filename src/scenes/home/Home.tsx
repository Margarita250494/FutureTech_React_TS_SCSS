
import { BlogSection } from "./blog/BlogSection";
import { FeatureSection} from "./feature/FeatureSection";
import {HeroSection} from "./hero/HeroSection";
import { ResourcesSection } from "./resources/ResourcesSection";
import { ReviewsSection } from "./reviews/ReviewsSection";

export const Home = () => {
  return (
    <>
    <HeroSection/>
    <FeatureSection/>
    <BlogSection/>
    <ResourcesSection/>
    <ReviewsSection/>
    </>
  );
};
