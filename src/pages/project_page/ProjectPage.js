import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";
import pp from "../../images/portfolio.png";
import meal from "../../images/meal.png";
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <h4 style={{ textAlign: 'center' }}>
      Click on libraries under each project to view live links
    </h4>          
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div 
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Student Performance Analysis System 
                                </h5>
                                <img src={nyc} alt={nyc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/ayushdit03/ml-project"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                Created a machine learning model with a pipeline architecture to predict student performance based on demographic and educational variables, achieving high R-squared scores with Gradient Boosting. Utilized Python for data handling, training, and evaluation, identifying key performance factors.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              ><a href="https://ml-project-bil7.onrender.com">
                                Machine Learning, Regression ,Data Science </a>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Book Recommendation System
                                </h5>
                                <img src={hd} alt={hd} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/ayushdit03/AI_Book_Recommendation_Project"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                Built a Book Recommendation System using advanced algorithms, including Cosine Similarity, and integrated collaborative and content-based filtering to develop a hybrid recommendation model for personalized reading suggestions.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              ><a href="https://ai-book-recommendation-system.onrender.com">
                              Deep Learning, AI, Flask</a>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProjectPage"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectPageContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  ATS Resume Checker
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/ayushdit03/ATS-tracker-Project"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                Implemented an ATS resume tracking system using the Gemini Pro API and Streamlit, analyzing uploaded resumes to match them with job descriptions, providing a percentage match score, and highlighting missing keywords for resume optimization.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              ><a href="https://ats-tracker-project.onrender.com/">
                              LLM, ML, Streamli, GenAI </a>
                              
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Mansionify
                                </h5>
                                <img src={eco} alt={eco} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/ayushdit03/property"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                Built a property trading website with Aadhaar-based user authentication and OTP confirmation. Enabled seamless property listing and deletion, and added admin verification for credibility, marked by a visible tick. Prioritized security and user-friendly functionality.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              ><a href="https://property2-wh04.onrender.com/home#">
                              HTML, CSS, JavaScript, API</a>
                               
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Zomato Sales Analysis
                                </h5>
                                <img src={pp} alt={pp} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/ayushdit03/Zomato-Sales-Analysis"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                I analyzed a global Zomato dataset, using Python for data cleaning and pandas for analysis. Developed an interactive dashboard revealing top cuisines, expensive restaurants, and average ratings by country, offering actionable insights for improving restaurant services.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              ><a href="#">
                              Power Bi, Excel , Analysis</a>
                              
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Portfolio
                                </h5>
                                <img src={meal} alt={meal} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/ayushdit03/Portfolio"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                Welcome to my personal portfolio. Explore my
                                work, skills, & achievements in a concise
                                & visually appealing format. Get a glimpse
                                of my expertise and creativity.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              ><a href="https://portfolio-pearl-sigma-56.vercel.app/">
                              HTML, CSS, JavaScript </a>
                               
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
