import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import uiImg1 from "../assets/img/UI DES 1.jpg";
import uiImg2 from "../assets/img/UI DES 2.jpg";
import uiImg3 from "../assets/img/UI DES 3.jpg";
import projImg1 from "../assets/img/New UI (1).png";
import projImg2 from "../assets/img/New UI (4).png";
import projImg3 from "../assets/img/New UI (3).png";
import colorSharp2 from "../assets/img/color-sharp.png";
import React from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [
    {
      title: "Movie Ticket Booking App",
      description: "UI Design",
      imgUrl: uiImg1,
    },
    {
      title: "NIKE Concept Shoe Store",
      description: "Design & Development",
      imgUrl: uiImg2,
    },
    {
      title: "Reevo E-Bike Web Site",
      description: "Web Design & Development",
      imgUrl: uiImg3,
    },
    {
      title: "Food Ordering Web Application",
      description: "Web Designing",
      imgUrl: projImg1,
    },
    {
      title: "Whiskey World Website",
      description: "Landing Page Design",
      imgUrl: projImg2,
    },
    {
      title: "MoVie+ Online Movie Platform",
      description: "Mobile Application UI UX Design",
      imgUrl: projImg3,
    },
  ];
  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
        <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>

                <h2>Projects</h2>
                <p> A project integrating UI/UX design, web designing, and web development creates a visually appealing and user-friendly website or web app. It combines designing intuitive user interfaces, visually engaging elements, and coding for seamless functionality, 
                  resulting in a comprehensive digital product that excels in both aesthetics and user experience. </p>
                  
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">UI/UX Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <p>UI/UX design is the art of crafting digital experiences. It focuses on making websites and apps visually engaging, easy to use, and delightful for users. UI (User Interface) design deals with creating intuitive layouts and appealing visuals, while UX (User Experience) design ensures smooth navigation and meaningful interactions. 
                        Together, UI/UX design creates the bridge between users and technology, making digital interactions seamless and enjoyable.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Web development is the technical foundation of the online realm. It encompasses the coding and programming that bring websites and web applications to life. Web developers work behind the scenes, using various languages and technologies to build the interactive features, functionalities, and dynamic content that users experience. Their work ensures that websites not only look visually appealing but also function seamlessly, providing users with practical and engaging online experiences. In essence, 
                        web development is the engine that powers the digital world, turning creative concepts into functional and interactive realities.</p>
                    </Tab.Pane>

                    
                    <Tab.Pane eventKey="third">
                      <p>Web designing is the creative process of shaping the online world. It involves crafting visually captivating and user-friendly websites that engage and inform visitors. Web designers use a blend of artistic elements, layout structures, and interactive features to build virtual spaces that effectively communicate messages and facilitate user interactions. 
                        In essence, web designing transforms ideas into captivating digital experiences that captivate and connect with audiences worldwide.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </div>}
            </TrackVisibility>
              
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}