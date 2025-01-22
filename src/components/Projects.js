import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ethereum-cryptopedia-thumbnail.jpg";
import projImg2 from "../assets/img/rm.jpg";
import projImg3 from "../assets/img/ts1.jpg";
import projImg4 from "../assets/img/cc.avif";
import projImg5 from "../assets/img/yy.avif";
import projImg6 from "../assets/img/h.webp";
import projImg7 from "../assets/img/rr.png";
import projImg8 from "../assets/img/emotion.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projectSections = [
    [
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
        link: "https://github.com/Nour-ben-aouicha/Time-Series",
      },
    ],
    [
      {
        title: "Mind Match: Career center platform",
        description: "Techniques/models used: Web scraping, OpenAI API, content-based recommendation, KMeans, Random Forest, Logistic Regression",
        imgUrl: projImg4,
        link: "https://github.com/Nour-ben-aouicha/MindMatch_careerCenter_Models",
      },
      {
        title: "YOGA Poses classification",
        description: "Models used: CNN, EfficientNetB0",
        imgUrl: projImg5,
        link: "https://github.com/Nour-ben-aouicha/Yoga_Poses",
      },
      {
        title: "Chronic Kidney Disease",
        description: "Techniques/models used: AdaBoost, Naive Bayes, SVM, Random Forest",
        imgUrl: projImg6,
        link: "https://github.com/Nour-ben-aouicha/chronic_Kidney_Disease",
      },
    ],
    [
      {
        title: "Raisin Variety Prediction",
        description: "Models used: Linear Regression",
        imgUrl: projImg7,
        link: "https://github.com/Nour-ben-aouicha/Raisin_Variety_Classification",
      },
      {
        title: "Emotion Detection",
        description: "Models used: CNN custom, VGG, ResNet",
        imgUrl: projImg8,
        link: "https://github.com/Nour-ben-aouicha/Emotion_Detection",
      },
    ],
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    This section explores projects from my GitHub repository. Visit via this{" "}
                    <a
                      href="https://github.com/Nour-ben-aouicha"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      link
                    </a>
                    . Each project includes details about its purpose and implementation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="0">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      {["Section 1", "Section 2", "Section 3"].map((section, idx) => (
                        <Nav.Item key={idx}>
                          <Nav.Link eventKey={`${idx}`} style={{ cursor: "pointer" }}>
                            {section}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {projectSections.map((projects, idx) => (
                        <Tab.Pane eventKey={`${idx}`} key={idx}>
                          <Row>
                            {projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
