export const FormActions = () => {
  return (
    <div className="feedback-form__cell feedback-form__cell--wide field">
      <div className="feedback-form__actions">
        <div className="feedback-form__agreement">
          <label htmlFor="check" className="checkbox">
            <input id="check" type="checkbox" className="checkbox__input" required />
            <span className="checkbox__label">
              I agree with Terms of Use and Privacy Policy
            </span>
          </label>
        </div>
        <button
          className="feedback-form__submit-button button button--accent"
          type="submit"
        >
          Send
        </button>
      </div>
    </div>
  );
};
