import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Project.css"
import CB2 from "../../assets/Home/images/CB2.png";
import lyst from "../../assets/Home/images/lyst.png";

import Particle from "./Particle";
import ProjectCards from "./ProjectCards";


function Projects() {
  return (
    <div className="home-container" id="project">

    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={lyst}
              isBlog={false}
              title="Lyst.com Clone"
              description={<div className="project-card-text"><p>Lyst is a fashion technology company, and premium shopping app.
              For over 160 million annual shoppers, we offer the most comprehensive range of products from 17,000 of the world’s leading brands and stores.
              For brands and stores, our goal is to power success online.
              We drive meaningful direct sales within a highly trusted brand environment.</p>
                <h3>Tech Stack:</h3><p>HTML  |  CSS |  JAVASCRIPT  |  REACT JS  |  REDUX  |  TAILWIND CSS  |  MATERIAL UI  |  BOOTSTRAP</p></div>}
              link="https://lyst-clone.netlify.app" target="blank"
              link2="https://github.com/rahulgupta12032003/Lyst-clone" 

            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={CB2}
              isBlog={false}
              title="CB2.com Clone"
              description={<div  className="project-card-text"><p> CB2 is a modern furniture store for lofts, apartments and houses of all sizes. From velvet sofas to chrome coffee tables, CB2 has a wide selection of fresh, fun furniture for playful personalities.  It is an international home decor store headquartered in Northbrook, Illinois. They employ 7500 employees over 100 stores in the United States and Canada, with franchises in countries in Europe </p>
                  <h3>Tech Stack:</h3> <p>HTML  |  CSS  |  JAVA SCRIPT  |  ADVACED JAVASCRIPT  |  API | BOOTSTRAP</p></div>}
              link="https://magnificent-semolina-629ed5.netlify.app" target="blank"
              link2="https://github.com/rahulgupta12032003/CB2" 
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Projects;
