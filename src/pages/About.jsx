import React from "react";
import Layout from "../components/Layout";
import "../styles/About.css";
import makess from "../images/makess.jpg";
import meetss from "../images/meetss.jpg";
import marryss from "../images/cover.jpg";

const About = () => {
  return (
    <Layout>
      <div className="aboutsection">
        <div className="container">
          <div className="aboutsection-first-details">
            <h1>Our Story</h1>
            <h2>
              <strong>Our Life Partner</strong> offers an opportunity and
              efficient way to find a life partner. With advanced algorithms and
              filters, you can easily find someone who shares your values,
              beliefs, and interests. We have millions of registered users from
              different parts of the country, and filters to match people based
              on their choices, interests, and lifestyle.{" "}
            </h2>
          </div>
          <div className="aboutsection-second-details">
            <h1>Way To Find A Partner</h1>
            <div className="aboutsection-second-details-way">
              <div className="make">
                <h2>Make</h2>
                <p>
                  To start the process, you need to create a profile on our life
                  partner website.
                </p>
                <img src={makess} alt="make" />
              </div>
              <div className="meet">
                <h2>Meet</h2>
                <p>
                  To start the process, you need to create a profile on our life
                  partner website.
                </p>
                <img src={meetss} alt="make" />
              </div>
              <div className="marry">
                <h2>Marry</h2>
                <p>
                  To start the process, you need to create a profile on our life
                  partner website.
                </p>
                <img src={marryss} alt="make" />
              </div>
            </div>
          </div>
          <div className="aboutsection-third-details">
            <h1>Our Vision & Mission</h1>
            <h2>
              <strong>Our Life Partner</strong> offers an opportunity and
              efficient way to find a life partner. With advanced algorithms and
              filters, you can easily find someone who shares your values,
              beliefs, and interests. We have millions of registered users from
              different parts of the country, and filters to match people based
              on their choices, interests, and lifestyle.{" "}
            </h2>
            <button>Meet Our Team</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
