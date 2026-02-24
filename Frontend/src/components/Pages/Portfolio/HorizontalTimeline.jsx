import React from "react";
import "./HorizontalTimeline.css";
import "bootstrap/dist/css/bootstrap.min.css";

const timelineData = [
  {
    year: "2021",
    title: "Beginning",
    description:
      "Laid the foundation of our digital entrepreneurship journey. Started with small freelance projects, driven by passion and vision to create impactful digital solutions.",
    image: "https://ahaanmedia.com/ahaanwebsite/All/begining.webp",
  },
  {
    year: "2022",
    title: "Growth",
    description:
      "Expanded our expertise by taking on larger and more diverse projects. Built strong client relationships and enhanced our capabilities in web development, design, and digital solutions.",
    image: "https://ahaanmedia.com/ahaanwebsite/All/Growth.webp",
  },
  {
    year: "2023",
    title: "Founding",
    description:
      "Officially established Ahaan Software Consulting as a company. Structured services, onboarded a growing team, and started catering to international clients with end-to-end digital solutions.",
    image: "https://ahaanmedia.com/ahaanwebsite/All/Founding.webp",
  },
  {
    year: "2024",
    title: "Leading",
    description:
      "Evolved into a trusted technology partner for businesses. Delivering innovative, scalable, and customer-centric solutions in web development, mobile apps, and digital transformation.",
    image: "https://ahaanmedia.com/ahaanwebsite/All/Leading.webp",
  },
];

const HorizontalTimeline = () => {
  return (
    <div className="timeline-container container py-5">
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              {index % 2 === 0 ? (
                <>
                  <h2 className="year">{item.year}</h2>
                  <div className="timeline-image">
                    <div className="circle-border">
                      <div className={`border-wave wave-${index + 1}`}></div>
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </>
              )}
            </div>

            <div className="timeline-right">
              {index % 2 === 0 ? (
                <>
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                </>
              ) : (
                <>
                  <div className="timeline-image">
                    <div className="circle-border">
                      <div className={`border-wave wave-${index + 1}`}></div>
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <h2 className="year">{item.year}</h2>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
