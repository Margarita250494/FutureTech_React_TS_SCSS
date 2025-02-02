import { FormMain } from "./FormMain"
import { AccordionMain } from "./AccordionMain"

export const SectionBody = () => {
  return (
    <div className="contacts__body">
        <div className="list">
            <FormMain/>
            <AccordionMain/>
        </div>
    </div>
  )
}

