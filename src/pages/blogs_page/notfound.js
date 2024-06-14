import React from 'react'
import Particle from '../../Particle'
import { Container } from "react-bootstrap";

export default function Notfound() {
    return (
        <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content d-flex justify-content-center align-items-center comingsoonclass">

                </Container>
            </Container>
        </section>
    )
}
