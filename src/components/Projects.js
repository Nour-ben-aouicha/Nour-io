import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ethereum-cryptopedia-thumbnail.jpg";
import projImg2 from "../assets/img/rm.jpg";
import projImg3 from "../assets/img/ts1.jpg";
import projImg4 from "../assets/img/cc.avif";
import projImg5 from "../assets/img/yy.avif";
import projImg6 from "../assets/img/h.webp";
import projImg7 from "../assets/img/rr.png";
import projImg8 from "../assets/img/zzz.avif";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ethereum Price Prediction",
      description: "Models used: DRL, HMM & LSTM",
      imgUrl: projImg1,
      link: "https://medium.com/@sarraayed124/ethereum-price-prediction-model-comparison-e5fa0e7741b9",
    },
    {
      title: "Risk Management Recommendation",
      description: "Models used: Roberta Large, GNN, Rebel",
      imgUrl: projImg2,
      link: "https://github.com/Nour-ben-aouicha/Risk-Management-Recommendation",
    },
    {
      title: "Time series stock prediction",
      description: "Models used: ARIMA Models",
      imgUrl: projImg3,
      link: "https://github.com/Nour-ben-aouicha/Time-Series"
    },
    
    
  ];
  const projects2 = [
    {
      title: "Mind Match: Career center platform",
      description: "techniques/models used: web scraping, OpenAI API, content based Recommendation system, KMeans clustering, Random Forest, Logistic Regression",
      imgUrl: projImg4,
      link: "https://github.com/Nour-ben-aouicha/MindMatch_careerCenter_Models"
    },
    {
      title: "YOGA Poses classification",
      description: "Models used: CNN, EfficientNetB0",
      imgUrl: projImg5,
      link: "https://github.com/Nour-ben-aouicha/Yoga_Poses"
    },
    {
      title: "Chronic Kidney Disease",
      description: "Techniques/Models used: Feature selection, AdaBoost, Naive Bayes, SVM, KNN, Random Forest, Decision Tree",
      imgUrl: projImg6,
      link: "https://github.com/Nour-ben-aouicha/chronic_Kidney_Disease"
    },
    
  ];

  
  const projects3 = [
    {
      title: "Raisin Variety Prediction",
      description: "Models used: linear Regression",
      imgUrl: projImg7,
      link: "https://github.com/Nour-ben-aouicha/Raisin_Variety_Classification"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container style={{ marginBottom: '0px' }}>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This section will offer a deeper exploration of the projects featured on my GitHub repository. You can access these projects by following this <a href="https://github.com/Nour-ben-aouicha" style={{ color: 'white', textDecoration: 'underline' }}>link</a>. Each project is meticulously detailed below, offering an in-depth explanation of its scope, purpose, and implementation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Section 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Section 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Section 3</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
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
