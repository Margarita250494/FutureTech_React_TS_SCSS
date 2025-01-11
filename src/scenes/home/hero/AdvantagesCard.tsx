import { advantages } from "../homeData";

export const AdvantagesCard = () => {
  return (
    <ul className="hero__advantages-list container">
      {advantages.map((advantage) => (
        <li key={advantage.title} className="hero__advantages-item">
          <div className="advantage-card">
            <img
              src={advantage.icon}
              alt="/"
              className="advantage-card__image"
              width="50"
              height="50"
              loading="lazy"
            />
            <a href="/" className="advantage-card__link">
              <h3 className="advantage-card__title h6">{advantage.title}</h3>
              <p className="advantage-card__subtitle">{advantage.subtitle}</p>
            </a>
            <p className="advantage card__details">{advantage.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
