import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectDetail from "./ProjectDetail";
import Particle from "../Atom";


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
            <ProjectDetail
               imgPath={"https://user-images.githubusercontent.com/42139446/115157389-99c87a80-a0a6-11eb-9f8c-317d1a5ff39b.png"}
              isBlog={false}
              title="Milap Clone"
              description="Milaap is an online crowdfunding platform
                build with react.js, Material-UI,Chakra-UI and Js. 
                Have features which allows  anyone across India to raise funds for healthcare, education."
              ghLink="https://github.com/Rutujalomate/subsequent-cent-9512"
              demoLink="https://melodious-souffle-f90b75.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectDetail
             imgPath={"https://d1z88p83zuviay.cloudfront.net/BannerImages/29e5f6d0-7087-49d0-bd5a-dab151d860de_1320x376.jpg"}
              isBlog={false}
              title="Nature Basket website Clone"
              description="Nature's Basket is an Indian grocery delivery chain of retail stores focused on gourmet food 
              build with HTML,CSS and Js."
              ghLink="https://github.com/aaryansinha16/Nature-Basket-WEB-18"
              demoLink="https://teal-pixie-015fbb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectDetail
              imgPath={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBv-AW4urhDNvxaW4aLeTbRiZxLYLVlLeuS1FU3wQdjLo2MUC0"}
              isBlog={false}
              title="Food App"
              description="It is a Food website that allows user to order food online  .build this website
              using different techtools like HTML,CSS and JS."
              ghLink="https://github.com/Rutujalomate/foodapp"
              demoLink="https://lustrous-hamster-41b10e.netlify.app/"              
            />
          </Col>



          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
