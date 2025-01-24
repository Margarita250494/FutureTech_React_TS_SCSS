import {HeroAltHeaderProps} from "@/shared/types"

export const HeroAltHeader = ({id,title,spanTitle,description}:HeroAltHeaderProps) => {
  return (
      <header className="hero-alt__header">
        <div className="hero-alt__header-inner container">
          <h1 className="hero-alt__title" id={id}>
            {title}&nbsp;
            <span className="hero-alt__title-hidden-part">
            {spanTitle}
            </span>
          </h1>
          <p className="hero-alt__subtitle h1 hidden-mobile" aria-hidden={true}>
            {spanTitle}
          </p>
          <p className="hero-alt__description">
            {description}
          </p>
        </div>
      </header>
  )
}

