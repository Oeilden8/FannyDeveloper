import React from "react";
import "./SkillCard.css";
import purpleCard from "../assets/purple-card-01.png";
import whiteCard from "../assets/white-card-01.png";
import violetCard from "../assets/violet-card-01.png";

export default function SkillCard() {
  return (
    <div className="card-container">
      <card className="skill-card-verso">
        <img src={purpleCard} alt="cards back" />
      </card>
      <card className="skill-card-verso">
        <img src={whiteCard} alt="cards back" />
      </card>
      <card className="skill-card-verso">
        <img src={violetCard} alt="cards back" />
      </card>
      <card className="skill-card">
        <h2>Front-end</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>Illustrator</li>
        </ul>
      </card>
    </div>
  );
}
