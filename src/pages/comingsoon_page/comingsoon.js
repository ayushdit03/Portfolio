import React from 'react';
import Particle from '../../Particle';
import { Container, Row, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';
import dpu from '../../images/dpu.png';
import zion from '../../images/zion.png';
import dental from '../../images/dental.png';

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
                                                                href="https://www.linkedin.com/posts/meet-agarwal-720160228_we-won-a-24-hrs-hackathon-devclash-ugcPost-7182259165526978560-5kPx?utm_source=share&utm_medium=member_desktop"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={dpu} alt={dpu} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        2024
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Got Developer Of The Year Title for year 2024
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - Devcraft
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
                                                                href="#"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={dental} alt={dental} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        it X dental
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Worked as a research project lead on collaboration with Dental Dpu college and Dpu IT college
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - DPU
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
                                                                href="https://www.linkedin.com/posts/meet-agarwal-720160228_we-won-a-24-hrs-hackathon-devclash-ugcPost-7182259165526978560-5kPx?utm_source=share&utm_medium=member_desktop"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={dpu} alt={dpu} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        Hackathon
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Won 24 hrs live hackathon 
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - Devcraft
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
                                                                href="3"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <div className="content-overlay"></div>
                                                                <div className="cert-header" style={{ backgroundColor: "white" }}>
                                                                    <img className="logo_img" src={zion} alt={zion} />
                                                                </div>
                                                                <div className="content-details fadeIn-top">
                                                                    <h3 className="content-title" style={{ color: "black" }}>
                                                                        Hackathon
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="cert-body">
                                                            <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                                                                Ranked 3rd in  Web Development Hackathon
                                                            </h2>
                                                            <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                                                                - Zion
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
