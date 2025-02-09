
import { useFormSubmit } from "@/shared/hooks";
import { FormField } from "./FormField";
import { SelectPhone } from "./SelectPhone";
import { FormActions } from "./FormActions";


export const Form = () => {
  const { state, sendForm, formRef } = useFormSubmit();
  return (
    <form onSubmit={sendForm} ref={formRef} className="feedback-form">
      <FormField
      id="firstName"
      label="First Name"
      type="text"
      required
      placeholder="Max"
      autoComplete="name"
      />
      <FormField
      id="lastName"
      label="Last Name"
      type="text"
      placeholder="Mustermann"
      />
      <FormField
      id="email"
      label="Email"
      type="email"
      placeholder="example@email.com"
      required
      autoComplete="email"
      />
      <div className="feedback-form__cell field select-phone">
        <label htmlFor="phoneNumber" className="field__label">
          Phone Number
        </label>
        <div className="field__body">
          <SelectPhone/>
        </div>
      </div>
      <FormField
      id="message"
      label="Message"
      type="message"
      placeholder="Hi! I have an idea..."
      required
      />
      <FormActions/>
      {state.success !== null && (
        <p className={state.success ? "success-message" : "error-message"}>
          {state.message}
        </p>
      )}
    </form>
  );
};

