/**
 * Project: Nextmetaforce Website
 * Author: Sreekanth | Nextmetaforce Consulting LLP
 * Created: 05-Nov-2025
 */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUserTie,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

export default function HeroCoreBeliefs() {
  const coreBeliefs = [
    {
      title: "Customer-First",
      text: "We measure success by the value we deliver to our customers, not by features shipped.",
      color: "orange",
      icon: <FaUserTie />,
    },
    {
      title: "Data-Driven Decisions",
      text: "We use data and analytics to inform every decision, ensuring measurable outcomes.",
      color: "amber",
      icon: <FaChartLine />,
    },
    {
      title: "Human-Centered AI",
      text: "We design AI that amplifies human intelligence and empathy — not replaces it.",
      color: "red",
      icon: <FaRobot />,
    },
    {
      title: "Security & Privacy",
      text: "Trust, transparency, and protection of sensitive data are at the heart of every solution.",
      color: "orange",
      icon: <FaShieldAlt />,
    },
    {
      title: "Innovation with Integrity",
      text: "We push boundaries responsibly, ensuring technology serves humanity.",
      color: "amber",
      icon: <FaLightbulb />,
    },
    {
      title: "Collaboration & Transparency",
      text: "We build together — through open communication and shared accountability.",
      color: "red",
      icon: <FaHandshake />,
    },
  ];

  return (
    <>
      <style>
        {`
.hero-beliefs-section {
  position: relative;
  background-color: #f8f9fb;
  color: #1a1a1a;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 5rem;
}

/* grid background */
.hero-beliefs-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px);
  background-size: 3.5rem 3.5rem;
  opacity: 1;
  z-index: 0;
}

.hero-beliefs-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 25%, rgba(255,165,0,0.25), transparent 60%),
    radial-gradient(circle at 20% 75%, rgba(255,99,71,0.25), transparent 60%);
  filter: blur(80px);
  z-index: 0;
}

/* gradient heading */
.text-gradient {
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* card design */
.belief-card {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 18px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  height: 100%;
}

.belief-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

/* icon circle */
.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
}

/* quote styling */
.quote-text {
  font-size: 1.25rem;
  font-weight: 500;
  color: #222;
  max-width: 800px;
  margin: 3rem auto 0 auto;
  line-height: 1.7;
  position: relative;
  z-index: 2;
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
        `}
      </style>

      <section className="hero-beliefs-section text-center">
        <Container className="position-relative">
          <h1 className="fw-bold display-5 mb-3 text-gradient">
            Our Core Beliefs
          </h1>
          <p
            className="lead mb-5 text-secondary"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            Shaping the future of business with cloud-first and AI-powered
            solutions.
          </p>

          <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
            {coreBeliefs.map((b, idx) => (
              <Col key={idx}>
                <div className="belief-card p-4 d-flex flex-column text-start">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="icon-circle me-3"
                      style={{
                        background:
                          b.color === "orange"
                            ? "rgba(255,140,0,0.15)"
                            : b.color === "amber"
                            ? "rgba(255,193,7,0.15)"
                            : "rgba(255,69,58,0.15)",
                      }}
                    >
                      {b.icon}
                    </div>
                    <h5 className="fw-semibold mb-0">{b.title}</h5>
                  </div>
                  <p className="text-muted small mb-0">{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Quote below cards */}
          <p className="quote-text">
            “We’re not chasing the next trend – we’re creating the next force.{" "}
            <br />
            <strong>NextMetaForce</strong> – Empowering the human side of
            transformation.”
          </p>
        </Container>
      </section>
    </>
  );
}
