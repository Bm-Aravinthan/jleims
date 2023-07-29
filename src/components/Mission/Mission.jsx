import React from "react";
import "./Mission.css";
import { images } from "../../constants";

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="img-container">
        <img src={images.Mission} alt="mission" />
      </div>
      <div className="content-container">
        <div className="title">Our Mission</div>
        <div className="description">
          Our mission is to give them a place of love, tolerance and hospitality
          in the congregation. A place where injured, depressed, frustrated
          people will find a home in the form of hope, acceptance, love,
          encouragement and guidance.
        </div>
        <div className="description sub">
          The church is a place where prayers are made for the sick and for
          deliverance for those who are bound or have a different form of
          addiction. It is a place where people grow into spiritual maturity
          through meetings, Bible studies, praying together, seminars, and
          conferences. The church must be a place to prepare and equip believers
          for ministry in God's Kingdom.
        </div>
      </div>
    </div>
  );
};

export default Mission;
