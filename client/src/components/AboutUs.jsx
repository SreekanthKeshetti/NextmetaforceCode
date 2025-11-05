/**
 * Project: Nextmetaforce Website
 * Author: Sreekanth | Nextmetaforce Consulting LLP
 * Created: 05-Nov-2025
 */

import React from "react";
const AboutUs = () => {
  const [visible, setVisible] = React.useState([]);
  const elementsRef = React.useRef([]);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = elementsRef.current.indexOf(entry.target);
            if (i !== -1) {
              setVisible((prev) => {
                const copy = [...prev];
                copy[i] = true;
                return copy;
              });
            }
          }
        });
      },
      { threshold: 0.18 }
    );

    elementsRef.current.filter(Boolean).forEach((el) => obs.observe(el));

    return () => {
      elementsRef.current.filter(Boolean).forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  return (
    <section className="aboutussection ">
      <section className="vision-wrap-new">
        <div className="vision-content">
          <h2 className="vision-main-new">Our vision</h2>
          <p className="vision-sub-new">
            Empowering innovation through creativity, technology and
            collaboration to build a better digital future.
          </p>
        </div>
      </section>
      <style>{`
    .aboutussection {
      font-family: Arial, sans-serif;
      color: #000;
    }

    /* NEW Vision Styles */
    .vision-wrap-new {
      position: relative;
      // background-color: #f9fafb;
      padding: 120px 20px;
      text-align: center;
      overflow: hidden;

      /* Subtle grid pattern background */
      background-image:
        linear-gradient(to right, #e0e0e0 1px, transparent 1px),
        linear-gradient(to bottom, #e0e0e0 1px, transparent 1px);
      background-size: 30px 30px;
      background-position: center center;
    }

    /* Gradient overlay at bottom */
    .vision-wrap-new::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150px;
      background: linear-gradient(to top, #c1e4ee, transparent);
      z-index: 0; /* Stays behind text */
    }

    /* Content container with stacking context */
    .vision-content {
      position: relative;
      z-index: 1;
    }

    /* Heading styles (UPDATED FOR MORE IMPACT) */
    .vision-main-new {
      font-size: 2.2rem; /* Larger font size */
      font-weight: 600; /* Bolder */
      color: #002d62; /* A deep, rich blue */
      margin-bottom: 25px; /* More space */
      letter-spacing: 2px; /* Add some letter spacing */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    /* Subtitle styles (UPDATED FOR MORE IMPACT) */
    .vision-sub-new {
      font-size: 1.35rem; /* Slightly larger */
      color: #2c3e50; /* Darker, more serious tone */
      max-width: 1200px; /* Wider subtitle */
      margin: 0 auto;
      line-height: 1.7; /* Improved readability */
      font-weight: 500; /* A bit heavier than normal */
    }


    /* Section heading */
    .section-heading {
      font-size:1.5rem;
      color: #000;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 16px;
      position: relative;
    }
    .section-heading::after {
      content: "";
      position: absolute;
      width: 50%;
      height: 3px;
      background: linear-gradient(90deg,#009dff,#0055ff);
      bottom: -8px;
      left: 25%;
      border-radius: 2px;
    }

    /* responsive adjustments */
    @media (max-width: 991px) {
      .vision-main-new { font-size: 2.2rem; padding: 0 10px; } /* Adjusted for new larger size */
      .vision-sub-new { font-size: 1rem; padding: 0 10px; } /* Adjusted for new larger size */
      .founder-img { height: 220px; }
    }
    @media (max-width: 768px) {
      .founders-row { gap: 18px; }
      .founder-card { width: 100%; }
    }
    @media (max-width: 576px) {
      .vision-main-new { font-size: 2.2rem; } /* Adjusted for new larger size */
      .vision-sub-new { font-size: 1rem; } /* Adjusted for new larger size */
      .vision-wrap-new { padding: 80px 15px; }
      .card-icon-circle { width: 60px; height: 60px; }
      .value-icon-circle { width: 50px; height: 50px; }
    }
  `}</style>
    </section>
  );
};
export default AboutUs;
