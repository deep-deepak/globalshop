import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLock, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import DividerWithIcon from '@/common/DividerWithIcon';

const AboutSection = () => {
    const serviceCards = [
        {
            icon: <FaLock size={40} />,
            title: "PRIORITIZING SECURITY",
            description: "Ensuring a secure environment is our top concern. Beyond installing roller shutters, we provide prompt security repairs to keep your premises protected at all times. Our commitment to safety leaves no room for compromise."
        },
        {
            icon: <FaMoneyBillWave size={40} />,
            title: "MAXIMIZING YOUR INVESTMENT",
            description: "Investing in quality roller shutters is a crucial decision, and we ensure you get the most out of it. Our team conducts regular maintenance checks to maintain peak performance. With competitive pricing, we provide cost-effective security solutions tailored to your needs."
        },
        {
            icon: <FaUsers size={40} />,
            title: "EXPERTISE & CUSTOMIZED SOLUTIONS",
            description: "With growing demand for roller shutter services in London, we adhere to industry standards while personalizing solutions to meet your requirements. Every installation comes with a warranty, reflecting our dedication to superior service."
        }
    ];

    return (
        <>
            <DividerWithIcon />
            <Container className="px-4">
                <Row className="mt-4 mb-3" data-aos="fade-up">
                    <Col>
                        <h2 className="text-center" style={{ color: '#ff6c22' }}>
                            WELCOME TO GLOBAL SHOPFRONTS - EXPERT ROLLER SHUTTER INSTALLATION IN LONDON
                        </h2>
                    </Col>
                </Row>

                <Row className="mb-4" data-aos="zoom-in">
                    <Col>
                        <h2 className="mb-3" style={{ color: '#333' }}>
                            INNOVATION, QUALITY & RELIABILITY
                        </h2>
                        <p>
                            At Global Shopfronts, we specialize in <strong>roller shutter installations</strong> across London for both residential and commercial properties.
                            Our expertise extends to <strong>maintenance and repair services</strong>, ensuring optimal security for your premises.
                            With a strong focus on quality, innovation, and customer satisfaction, we have built a reputation as a trusted provider in the industry.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5" data-aos="fade-right">
                    <Col>
                        <h2 className="mb-3" style={{ color: '#333' }}>
                            COMPLETE ROLLER SHUTTER SOLUTIONS
                        </h2>
                        <p>
                            From installations to emergency repairs, our skilled team offers comprehensive roller shutter solutions.
                            Whether you need shutters for residential, industrial, or commercial use, we deliver top-notch service to ensure durability and security.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    {serviceCards.map((card, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="h-100 shadow-sm" style={{ border: 'none' }}>
                                <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                                    <div className="rounded-circle p-3 mb-3" style={{ backgroundColor: '#ff6c22', color: 'white' }}>
                                        {card.icon}
                                    </div>
                                    <Card.Title className="mb-3 fw-bold">{card.title}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default AboutSection;
