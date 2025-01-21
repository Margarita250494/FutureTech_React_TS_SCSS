import { useLocation } from "react-router-dom";
import { metricsData } from "../homeData";

export const Metrics = () => {
  const location = useLocation();
  const isResourcesPage = location.pathname === "/resources";
  const filteredMetricsData = isResourcesPage
    ? metricsData
    : metricsData.slice(0, -1);

  return (
    <div className="hero__metrics metrics full-vw-line full-vw-line--top full-vw-line--left">
      <dl className="metrics__list">
        {filteredMetricsData.map((metric) => (
          <div key={metric.title} className="metrics__item">
            <dt className="metrics__key">{metric.title}</dt>
            <dd className="metrics__value h3">
              {metric.value}<span className="metrics__sign">{metric.sign}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
