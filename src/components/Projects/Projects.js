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
import twelve from "../../Assets/Projects/12.png";
import thirteen from "../../Assets/Projects/13.png";
import fourteen from "../../Assets/Projects/14.png";
import fivteen from "../../Assets/Projects/15.png";
import sixteen from "../../Assets/Projects/16.png";
import seventeen from "../../Assets/Projects/17.png";
import eighteen from "../../Assets/Projects/18.png";
import nineteen from "../../Assets/Projects/19.png";
import twenty from "../../Assets/Projects/20.png";
import twentyone from "../../Assets/Projects/21.png";
import twentytwo from "../../Assets/Projects/22.png";
import twentythree from "../../Assets/Projects/23.png";
import twentyfour from "../../Assets/Projects/24.png";
import twentyfive from "../../Assets/Projects/25.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twelve}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thirteen}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fourteen}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fivteen}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sixteen}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seventeen}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eighteen}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nineteen}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twenty}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twentyone}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twentytwo}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twentythree}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twentyfour}
              isBlog={false}
              title="Germany Motors - Logo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twentyfive}
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
