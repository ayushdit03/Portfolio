import React from 'react';
import Particle from '../../Particle';
import { Container, Row, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';
import gfg from '../../images/gfg.png';
import ay from '../../images/ay-py.png';
import cbta from '../../images/UC-ced27dc4-f236-4bd7-b1c1-d93fdff0f3e2.pdf';

export default function ComingSoon() {
    return (
        <section className="home-section">
            <Container fluid id="resume">
                <Particle />
                <Container className="home-content">
                    <div className="d-flex justify-content-center" width="100%" style={{ backgroundColor: "#fbd9ad" }}>
                        <Zoom left cascade>
                            <h1 style={{ color: "rgb(134 61 176)" }}>Achievements</h1>
                        </Zoom>
                    </div>
                    <div>
                        <Container fluid className="certificate-section" id="about">
                            <Container>
                                <Row>
                                    <Col md={20} className="mt-5">
                                        <Row className="g-5">
                                            <Col md={6} className="col-sm-12 col-md4">
                                                <Fade bottom duration={2000} distance="20px">
                                                    <div className="cert-card" style={{ height: 'calc(100% + 40px)' }}>
                                                        <div className="content">
                                                            <a
                                                                href="https://media.geeksforgeeks.org/courses/certificates/29c356e06c745af62c8535beb06adb4c.pdf"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={gfg} alt={gfg} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        Certificate
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Complete Machine Learning And Data Science Program
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - GeeksForGeeks
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </Col>
                                            <Col md={6}>
                                                <Fade bottom duration={2000} distance="20px">
                                                    <div className="cert-card" style={{ height: 'calc(100% + 40px)' }}>
                                                        <div className="content">
                                                            <a
                                                                href={cbta}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={ay} alt={ay} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        Certificate
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Python for Data Science and Machine Learning
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - Udemy
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </Col>
                                            <row></row>
                                            <Col md={6} className="col-sm-12 col-md4">
                                                <Fade bottom duration={2000} distance="20px">
                                                    <div className="cert-card" style={{ height: 'calc(100% + 40px)' }}>
                                                        <div className="content">
                                                            <a
                                                                href="https://media.geeksforgeeks.org/courses/certificates/29c356e06c745af62c8535beb06adb4c.pdf"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={gfg} alt={gfg} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        Certificate
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Complete Machine Learning And Data Science Program
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - GeeksForGeeks
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </Col>
                                            <Col md={6}>
                                                <Fade bottom duration={2000} distance="20px">
                                                    <div className="cert-card" style={{ height: 'calc(100% + 40px)' }}>
                                                        <div className="content">
                                                            <a
                                                                href={cbta}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={ay} alt={ay} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        Certificate
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Python for Data Science and Machine Learning
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - Udemy
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </Col>
                                            
                                            
                                            {/* Add more certificates here */}
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </div>
                </Container>
            </Container>
        </section>
    );
}
