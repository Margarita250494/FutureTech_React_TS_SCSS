
import { Intro } from "../blog/blogImport";
import List from "./List";



export const ReportsSection = () => {
  return (
    <section className="section tabs" aria-labelledby="reports-title">
      <header className="section__header">
        <div className="section__header-inner container">
          <Intro
            divClassName="section__header-info"
            reverse={true}
            pClassName="section__subtitle tag"
            intro="Dive into the Details"
            h2ClassName="section__title"
            id="reports-title"
            title="In-Depth Reports and Analysis"
          />
          <div className="section__actions">
            <div
              className="tabs__buttons tabs__buttons--compact"
              role="tablist"
              aria-labelledby="reports-title"
            >
              <button
                className="tabs__button active"
                type="button"
                id=""
                role="tab"
                aria-controls=""
              >
                Whitepapers
              </button>
              <button
                className="tabs__button"
                type="button"
                id=""
                role="tab"
                aria-controls=""
              >
                Ebooks Reports
              </button>
              <button
                className="tabs__button"
                type="button"
                id=""
                role="tab"
                aria-controls=""
              >
                Reports
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="section__body">
        <div className="tabs__body">
          <div
            className="tabs__content"
            id=""
            aria-controls="tabpanel-1"
            tabIndex={0}
          >
            <List/>
          </div>
        </div>
      </div>
    </section>
  );
};
