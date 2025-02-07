import { FooterSocials } from "@/components/footer/FooterSocials";
import { contacts } from "./data";
import { ContactCard } from "./ContactCard";
import { SectionBody } from "./SectionBody";

export const SectionHeader = () => {
  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <header className="contacts__header">
        <h1 className="visually-hidden" id="contacts-title">
          Contacts
        </h1>
        <ul className="bordered-grid bordered-grid--4-cols container">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
          {/**4 element with social */}
          <li className="bordered-grid__item">
            <div className="contacts-card">
              <h2 className="contacts-card__title h6">General Inquiries</h2>
              <div className="contacts-card__body">
                <div className="soc1als soc1als--3-cols ">
                  <FooterSocials />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
      <SectionBody/>
    </section>
  );
};
