import { FAQProps } from "@/shared/types";


export const Accordion = ({id,title,content,isOpen}:FAQProps) => {
  return (
    <div className="accordion tile">
      <details className="accordion__details" name="faq" open={isOpen}>
        <summary className="accordion__summary">
          <h4 className="accordion__title h6">
            <span role="term" aria-details={id}>
              {title}
            </span>
          </h4>
        </summary>
      </details>
      <div className="accordion__content" id={id} role="definition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            <p>
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
