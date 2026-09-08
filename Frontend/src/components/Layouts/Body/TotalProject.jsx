import React from "react";
import "./TotalProject.css";
import { FaUsers, FaCheckCircle, FaSmile } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
 
const stats = [
  {
    value: 6,
    label: "Years of Experience",
    icon: <FaAward />,
    colorClass: "process-step-1-color",
  },
  {
    value: 25,
    label: "Team Members",
    icon: <FaUsers />,
    colorClass: "process-step-2-color",
  },
  {
    value: 65,
    label: "Completed Projects",
    icon: <FaCheckCircle />,
    colorClass: "process-step-3-color",
  },
  {
    value: 52,
    label: "Happy Clients",
    icon: <FaSmile />,
    colorClass: "process-step-4-color",
  },
];
 
const TotalProject = () => {
  return (
    <section className="process-section container">
      <div className="process-row">
        {stats.map((stat, index) => (
          <div key={index} className={`we-do-col-div ${stat.colorClass}`}>
            {/* Floating Icon */}
            <div className="total-icons">{stat.icon}</div>
 
            <div className="webe-inner-div">
              {/* Label */}
              <div className="step-title always-visible">{stat.label}</div>
 
              {/* Value */}
              <div className="step-content">
                <div className="step-value">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default TotalProject;