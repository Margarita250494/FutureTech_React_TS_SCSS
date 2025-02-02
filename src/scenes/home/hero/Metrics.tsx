import { useLocation } from "react-router-dom";
import { metricsData } from "../homeData";

type Props ={
  className: string;
  h2?:boolean;
}

export const Metrics = ({className,h2}:Props) => {
  const location = useLocation();
  const isResourcesPage = location.pathname === "/resources";
  const filteredMetricsData = isResourcesPage
    ? metricsData
    : metricsData.slice(0, -1);

  return (
    <div className={`metrics ${className}`.trim()}>
      <dl className="metrics__list">
        {filteredMetricsData.map((metric) => (
          <div key={metric.title} className="metrics__item">
            <dt className="metrics__key">{metric.title}</dt>
            <dd className={`metrics__value ${h2 ? "h2" : "h3"}`}>
              {metric.value}<span className="metrics__sign">{metric.sign}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

//className="metrics__value h3 "