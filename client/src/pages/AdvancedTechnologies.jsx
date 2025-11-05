/**
 * Project: Nextmetaforce Website
 * Author: Sreekanth | Nextmetaforce Consulting LLP
 * Created: 05-Nov-2025
 */
import React from "react";
import advancedImg from "../assets/cloudAi.webp";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdvancedTechnologies = () => {
  return (
    <>
      <style>{`
        .service-hero {
          background-image: url(${advancedImg});
          // background-size: cover;
          // background-position: center;
          // min-height: 80vh;
          // position: relative;
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // text-align: center;
          // color: #fff;
           background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            // overflow: hidden;
        }
        .service-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
        }
        .service-hero .hero-content { position: relative; z-index:2; padding:2rem; }
        .Business-title { font-size: 2.5rem; font-weight: 600; }
        .lead { font-size: 1.05rem; color: #f1f1f1; }

                .service-button {
          display: inline-block;
          background-color: transparent;
          border: 2px solid #ff6a00;
          color: #ff6a00;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 28px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 30px;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
        }

        .service-button:hover {
          background-color: #ff6a00;
          color: white !important;
          border-color: #ff6a00;
        }


      `}</style>

      <div className="service-hero">
        <div className="hero-content">
          <h1 className="Business-title">
            Advanced Technologies – Blockchain / Web3 / IoT
          </h1>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="mt-3">
            Advanced Technologies – Blockchain / Web3 / IoT
          </h2>
          <p className="">
            Build decentralized, connected, and intelligent systems.
          </p>
        </div>

        <div className="mt-4">
          <p>
            The next wave of digital transformation is here. At NextMetaForce,
            we are at the forefront of Advanced Technologies, helping visionary
            businesses build the foundations for a decentralized and
            hyper-connected future.
          </p>
        </div>

        <div className="mt-4">
          <h4>Our Focus Areas:</h4>
          <ul>
            <li>
              <strong>Blockchain & Web3:</strong> Smart contracts, dApps, secure
              ledger systems.
            </li>
            <li>
              <strong>IoT:</strong> Connected device ecosystems and real-time
              automation.
            </li>
            <li>
              <strong>Strategic Integration:</strong> Seamless integration with
              enterprise systems.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center my-5">
        <Link to="/services" className="btn service-button">
          ← Back to Services
        </Link>
      </div>
    </>
  );
};

export default AdvancedTechnologies;
