import { FormFieldProps } from "@/shared/types";

export const FormField = ({
  label,
  id,
  type = "text",
  required = false,
  placeholder,
  autoComplete
}: FormFieldProps) => {
  return (
    <div className={`feedback-form__cell field ${type==="message" && "feedback-form__cell--wide"}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {required && (
          <span className="field__required-star" aria-hidden={true}>
            *
          </span>
        )}
      </label>
      {type === "message" ? (
        <textarea
          id={id}    
          className="field__control"
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="field__control"
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
        />
      )}
    </div>
  );
};

