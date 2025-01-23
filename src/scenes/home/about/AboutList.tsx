import { aboutList } from "../homeData"

export const AboutList = () => {
  return (
    <ul className="about__list">
        {aboutList.map((about)=>(
            <li key={about.title} className="about__item">
                <a href="/" className="about-card tile">
                    <h3 className="about-card__title circle-icon">{about.title}</h3>
                    <div className="about-card__description">
                        <p>{about.description}</p>
                    </div>
                </a>
            </li>
        ))}
    </ul>
  )
}

