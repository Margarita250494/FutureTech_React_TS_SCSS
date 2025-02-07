//import { useState } from "react";
//import PhoneInput from "react-phone-input-2";
//import "react-phone-input-2/lib/style.css";


import { SelectPhone } from "./SelectPhone";

export const Form = () => {
  
  return (
    <form action="" className="feedback-form">
      <div className="feedback-form__cell field">
        <label htmlFor="firstName" className="field__label">
          First Name{" "}
          <span className="field__required-star" aria-hidden={true}>
            *
          </span>
        </label>
        <input
          type="text"
          className="field__control"
          id="firstName"
          placeholder="Max"
          required
        />
      </div>
      <div className="feedback-form__cell field">
        <label htmlFor="lastName" className="field__label">
          Last Name
        </label>
        <input
          type="text"
          className="field__control"
          id="lastName"
          placeholder="Mustermann"
        />
      </div>
      <div className="feedback-form__cell field">
        <label htmlFor="email" className="field__label">
          Email{" "}
          <span className="field__required-star" aria-hidden={true}>
            *
          </span>
        </label>
        <input
          type="email"
          className="field__control"
          id="email"
          placeholder="example@email.com"
          required
        />
      </div>
      <div className="feedback-form__cell field select-phone">
        <label htmlFor="phoneNumber" className="field__label">
          Phone Number
        </label>
        <div className="field__body">
          <SelectPhone/>
        </div>
      </div>
      <div className="feedback-form__cell feedback-form__cell--wide field">
      <label htmlFor="message" className="field__label">
            Message{" "}
          <span className="field__required-star" aria-hidden={true}>
            *
          </span>
        </label>
        <textarea
          className="field__control"
          id="message"
          placeholder="Hi! I have an idea..."
          required
        />
      </div>
      <div className="feedback-form__cell feedback-form__cell--wide field">
        <div className="feedback-form__actions">
            <div className="feedback-form__agreement">
                <label htmlFor="" className="checkbox">
                    <input type="checkbox"  className="checkbox__input" required/>
                    <span className="checkbox__label">I agree with Terms of Use and Privacy Policy</span>
                </label>
            </div>
            <button 
                className="feedback-form__submit-button button button--accent"
                type="submit">
                    Send
            </button>
        </div>
      </div>
    </form>
  );
};


/**
 * <input className="field__control" id="phoneNumber" placeholder="(999)999-999-99"/>
 * <PhoneInput
            country={"de"} 
            value={phone}
            onChange={(phone) => setPhone(phone)}
            
          />
 * 
 * inputStyle={{
              width: "100%",
              background: "#181818",
              border: "1px solid #333",
              color: "white",
            }}
            buttonStyle={{
              background: "#181818",
              border: "1px solid #333",
            }}
 */