import { useRouter } from 'next/router';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaImages, FaUserCog, FaPaperPlane, FaEye, FaUserTie } from 'react-icons/fa';

const ServiceSection = () => {
    const router = useRouter();
    const cardsData = [
        {
            id: 1,
            title: 'CONTACT US',
            description: "Get in touch with our team to explore customized solutions for your business. Reach out via email or schedule a meeting for expert assistance.",
            icon: <FaEnvelope size={30} color="#ffb347" />,
            buttonText: 'Request a Quote',
            buttonIcon: <FaPaperPlane />,
            gradient: 'linear-gradient(to right, #ffb347, #ffcc33)',
            link: "/contact"
        },
        {
            id: 2,
            title: 'OUR WORK',
            description: 'With years of expertise in shopfront installations, glazing solutions, and storefront refurbishments, we serve businesses in the UK and beyond. Browse our portfolio to see our craftsmanship.',
            icon: <FaImages size={30} color="#f7971e" />,
            buttonText: 'Explore Projects',
            buttonIcon: <FaEye />,
            gradient: 'linear-gradient(to right, #f7971e, #ffd200)',
            link: "/gallery"
        },
        {
            id: 3,
            title: 'OUR SERVICES',
            description: 'We specialize in designing, manufacturing, and installing premium shopfronts, glass fittings, and maintenance services tailored to businesses worldwide, with a strong presence in the UK market.',
            icon: <FaUserCog size={30} color="#ff9966" />,
            buttonText: 'Customer Support',
            buttonIcon: <FaUserTie />,
            gradient: 'linear-gradient(to right, #ff9966, #ff5e62)',
            link: "/category"
        }
    ];

    return (
        <section className="service-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <Container>
                <Row className="justify-content-center g-4">
                    {cardsData.map((card, index) => (
                        <Col
                            key={card.id}
                            lg={4}
                            md={6}
                            sm={12}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div
                                className="text-center p-4 h-100 d-flex flex-column shadow-sm"
                                style={{
                                    background: card.gradient,
                                    borderRadius: '8px',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <div
                                    className="mb-3"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 200 + 100}
                                >
                                    <div
                                        className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white shadow"
                                        style={{
                                            width: '70px',
                                            height: '70px',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        {card.icon}
                                    </div>
                                </div>

                                <h3
                                    className="fw-bold mb-3 text-white"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200 + 200}
                                >
                                    {card.title}
                                </h3>

                                <p
                                    className="mb-4 text-white"
                                    style={{ lineHeight: '1.6' }}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200 + 300}
                                >
                                    {card.description}
                                </p>

                                <div
                                    className="mt-auto"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200 + 400}
                                >
                                    <Button
                                        variant="light"
                                        className="d-inline-flex align-items-center gap-2 px-4 py-2 border border-dark"
                                        style={{
                                            transition: 'all 0.3s ease',
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)'
                                        }}
                                        onClick={() => router.push(card.link)}
                                    >
                                        {card.buttonIcon} {card.buttonText}
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx>{`
                .shadow-sm:hover {
                    transform: translateY(-5px);
                }
                .rounded-circle:hover {
                    transform: scale(1.1);
                }
                .btn-light:hover {
                    background-color: #ffffff !important;
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    );
};

export default ServiceSection;
