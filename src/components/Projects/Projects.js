import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've been working on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Task Buddy App"
              description="A task management web application built using React.js and Firebase. Users can manage tasks, set reminders, and track progress in real time."
              ghLink="https://github.com/Shashidhar-bhat/Task_Buddy_App"
              demoLink="https://your-demo-link-here.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Disease Detection in Betel Nuts"
              description="An image processing application that uses Convolutional Neural Networks (CNN) to detect diseases in betel nuts with high accuracy."
              ghLink="https://github.com/Shashidhar-bhat/Diseased-Betel-Nut-Detection-Using-Image-Processing-"
              demoLink="https://disease-detection-app.com"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student Management System"
              description="A Java-based student management system that helps efficiently manage student records and academic data. It allows CRUD operations on student details, tracks performance, and generates reports."
              ghLink="https://github.com/Shashidhar-bhat/Student-management-system"
              demoLink="https://sms-app.com/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Automotive Service Management System"
              description="A system designed to streamline automotive service operations, including vehicle maintenance, repair tracking, customer management, and inventory control, ensuring efficient service delivery and enhanced customer satisfaction."
              ghLink="https://github.com/Shashidhar-bhat/Automotive-Service-Management-System-"
              demoLink="https://plant-disease-app.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SentienceNet"
              description="An NLP-based project that detects suicide-related posts and user intentions. It aids in identifying high-risk situations and supports suicide prevention."
              ghLink="https://github.com/Shashidhar-bhat/SentienceNet"
              demoLink="https://sentience-net.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Mood Detection with Facial Recognition"
              description="A real-time application that uses a CNN model trained on the FER-2013 dataset to detect emotions from facial expressions. OpenCV is utilized for face detection, enabling accurate emotion classification in video streams."
              ghLink="https://github.com/Shashidhar-bhat/Emotion-Recognition-with-Face-Detection"
              demoLink="https://emotion-recognition.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
