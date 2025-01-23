import logo from "@/assets/images/about/Logo.svg"
import { AboutList } from "./AboutList"



export const AboutSection = () => {
  return (
    <section className="about" aria-labelledby="about-title">
        <div className="about__inner container">
            <header className="about__header">
                <img 
                    src={logo} 
                    alt="" 
                    className="about__icon" 
                    width="150" 
                    height="150" 
                    loading="lazy" 
                />
                <div className="about__info">
                <p className="about__subtitle tag">Learn, Connect, and Innovate</p>
                <h2 className="about__title" id="about-title">Be Part of the Future Tech Revolution</h2>
                </div>
                <div className="about__description">
                    <p>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                </div>
            </header>
            <AboutList/>
        </div>
    </section>
  )
}

