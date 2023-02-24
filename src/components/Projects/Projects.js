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
import eight from "../../Assets/Projects/8.png";
import nine from "../../Assets/Projects/9.png";
import ten from "../../Assets/Projects/10.png";
import eleven from "../../Assets/Projects/11.png";

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
              title="AERMREA - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={second}
              isBlog={false}
              title="AERMREA - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={third}
              isBlog={false}
              title="AERMREA - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fifth}
              isBlog={false}
              title="ALFAHD ALSOUDY - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sixth}
              isBlog={false}
              title="ALFAHD ALSOUDY - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fourth}
              isBlog={false}
              title="ALFAHD ALSOUDY - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATLANTA}
              isBlog={false}
              title="ATLANTA - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eight}
              isBlog={false}
              title="Nsro - Buisness Card"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nine}
              isBlog={false}
              title="Nsro - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ten}
              isBlog={false}
              title="Azmo Store - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eleven}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
