import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashidhar Bhat K S</span> from{" "}
            <span className="purple">Bangalore, Karnataka</span>.
            <br />I am a passionate developer skilled in various technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              🎮 Playing Video Games
            </li>
            <li className="about-activity">
              📚 Reading Tech Blogs
            </li>
            <li className="about-activity">
              🌍 Exploring Open-Source Projects
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shashidhar Bhat K S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
