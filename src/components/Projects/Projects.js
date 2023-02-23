import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import first from "../../Assets/Projects/1.png";
import second from "../../Assets/Projects/2.png";
import third from "../../Assets/Projects/3.png";
import fourth from "../../Assets/Projects/4.png";
import fifth from "../../Assets/Projects/5.png";
import sixth from "../../Assets/Projects/6.png";
import ATLANTA from "../../Assets/Projects/7.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first}
              isBlog={false}
              title="AERMREA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={second}
              isBlog={false}
              title="AERMREA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={third}
              isBlog={false}
              title="AERMREA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fifth}
              isBlog={false}
              title="ALFAHD ALSOUDY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sixth}
              isBlog={false}
              title="ALFAHD ALSOUDY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fourth}
              isBlog={false}
              title="ALFAHD ALSOUDY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATLANTA}
              isBlog={false}
              title="ATLANTA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
