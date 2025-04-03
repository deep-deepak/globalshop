import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FaAward,
    FaClock,
    FaHeadset,
    FaTruck,
    FaCog,
    FaMoneyBillWave
} from 'react-icons/fa';
import DividerWithIcon from '@/common/DividerWithIcon';

const ServiceFeatures = () => {
    const features = [
        {
            id: 1,
            icon: <FaAward />,
            title: "SKILLED PROFESSIONALS",
            description: "At Global Shopfronts, our team comprises highly skilled engineers dedicated to delivering exceptional roller shutter installation, maintenance, and repair services. We prioritize our customers at every step."
        },
        {
            id: 2,
            icon: <FaMoneyBillWave />,
            title: "PREMIUM SERVICE",
            description: "We ensure fast and efficient service while maintaining high-quality standards. At Global Shopfronts, customer satisfaction is our top priority, and we never compromise on excellence."
        },
        {
            id: 3,
            icon: <FaTruck />,
            title: "AFFORDABLE PRICING",
            description: "Whether it's a fresh installation or a routine maintenance check, we provide fair and competitive pricing across the UK. Our rates reflect only the necessary service costs, ensuring affordability."
        },
        {
            id: 4,
            icon: <FaCog />,
            title: "PROMPT RESPONSE",
            description: "Need a quick roller shutter installation? Global Shopfronts understands the importance of security and ensures timely service without delays."
        },
        {
            id: 5,
            icon: <FaClock />,
            title: "24/7 AVAILABILITY",
            description: "We offer around-the-clock emergency services across the UK. No matter your roller shutter needs, our team is always ready to assist."
        },
        {
            id: 6,
            icon: <FaHeadset />,
            title: "HONEST & DEPENDABLE",
            description: "From consultation to completion, we maintain full transparency in our services. Our team ensures clear communication and provides accurate information to our customers."
        }
    ];

    return (
        <section className="service-features py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <DividerWithIcon />
            <Container className="py-5">
                <Row className="g-4">
                    {features.map((feature, index) => (
                        <Col
                            key={feature.id}
                            xs={12}
                            md={6}
                            lg={4}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <Card
                                className="h-100 shadow border-0 text-center p-4"
                                style={{ transition: 'transform 0.3s ease' }}
                            >
                                <div
                                    className="d-flex justify-content-center mb-3"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 200 + 100}
                                >
                                    <div
                                        className="rounded-circle text-white d-flex align-items-center justify-content-center"
                                        style={{
                                            width: 80,
                                            height: 80,
                                            transition: 'transform 0.3s ease',
                                            background: "#ff6c22"
                                        }}
                                    >
                                        <span style={{ fontSize: 36 }}>{feature.icon}</span>
                                    </div>
                                </div>
                                <Card.Body className="px-0">
                                    <Card.Title
                                        className="fw-bold mb-3"
                                        style={{ color: '#333' }}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200 + 200}
                                    >
                                        {feature.title}
                                    </Card.Title>
                                    <Card.Text
                                        style={{ color: '#666', lineHeight: '1.6' }}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200 + 300}
                                    >
                                        {feature.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx>{`
                .card:hover {
                    transform: translateY(-10px);
                }
                .rounded-circle:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};

export default ServiceFeatures;
