
import { BlogSection } from "./blog/BlogSection";
import { FeatureSection} from "./feature/FeatureSection";
import {HeroSection} from "./hero/HeroSection";
import { ResourcesSection } from "./resources/ResourcesSection";

export const Home = () => {
  return (
    <>
    <HeroSection/>
    <FeatureSection/>
    <BlogSection/>
    <ResourcesSection/>
    </>
    
    
  );
};
