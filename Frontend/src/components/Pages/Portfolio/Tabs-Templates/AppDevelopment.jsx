import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppDevelopment.css";

const AppDevelopment = () => {
  const imageLinks = [
    "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/1.webp",
    "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/2.webp",
    "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/3.webp",
    "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/4.webp",
    "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/5.webp",
  ];

  return (
    <section className="appdev-section">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="appdev-title">App Development Designs</h2>
          <p className="appdev-subtitle">
            Clean and modern designs for mobile and web applications
          </p>
        </div>

        {/* Gallery */}
        <div className="appdev-gallery">
          {imageLinks.map((img, index) => (
            <div className="appdev-card" key={index}>
              <img src={img} alt={`App Design ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
