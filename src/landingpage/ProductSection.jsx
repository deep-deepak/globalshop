import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import DividerWithIcon from '@/common/DividerWithIcon';
import { FaLock, FaStore, FaBuilding } from 'react-icons/fa';

const ProductsSection = () => {
    const servicesData = [
        {
            id: 1,
            image: 'https://img.freepik.com/free-photo/metal-shutter-door_1203-879.jpg',
            icon: <FaLock size={50} color="#ff6c22" />,
            title: 'SECURITY SHUTTERS',
            description: 'We manufacture the right shutters to tighten your business\' security.',
            link: '#'
        },
        {
            id: 2,
            image: 'https://img.freepik.com/free-photo/modern-storefront-with-large-windows_23-2148765988.jpg',
            icon: <FaStore size={50} color="#ff6c22" />,
            title: 'SHOPFRONTS',
            description: 'Only the right shopfront to impress your customers from afar and increase your clientele.',
            link: '#'
        },
        {
            id: 3,
            image: 'https://img.freepik.com/free-photo/metal-shutter-door_1203-879.jpg',
            icon: <FaBuilding size={50} color="#ff6c22" />,
            title: 'CURTAIN WALLING',
            description: 'Let\'s help you define and install the right curtain walling system to suit your building.',
            link: '#'
        }
    ];

    return (
        <section className="products-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <DividerWithIcon />
            <Container>
                <Row className="mb-5">
                    <Col className="text-center">
                        <h1
                            className="display-4 fw-bold mb-3"
                            data-aos="fade-up"
                            style={{ color: '#333' }}
                        >
                            Our Product Services
                        </h1>
                        <div
                            className="mx-auto"
                            style={{
                                width: '80px',
                                height: '4px',
                                backgroundColor: '#ff6c22'
                            }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
                    </Col>
                </Row>

                <Row className="g-4">
                    {servicesData.map((service, index) => (
                        <Col key={service.id} md={4} className="mb-4">
                            <Card
                                className="h-100 border-0 shadow-sm overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                            >
                                <div className="position-relative">
                                    <Card.Img
                                        variant="top"
                                        src={service.image}
                                        alt={service.title}
                                        style={{
                                            height: '250px',
                                            objectFit: 'cover',
                                            filter: 'grayscale(20%)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        className="card-img-hover"
                                    />
                                    <div
                                        className="position-absolute top-0 start-0 w-100 h-100"
                                        style={{
                                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))'
                                        }}
                                    />
                                </div>

                                <Card.Body
                                    className="d-flex flex-column text-center p-4"
                                    style={{ backgroundColor: '#fff' }}
                                >
                                    <div
                                        className="mb-3 mx-auto"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 200 + 100}
                                    >
                                        {service.icon}
                                    </div>
                                    <Card.Title
                                        className="fw-bold mb-3"
                                        style={{ color: '#333' }}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200 + 200}
                                    >
                                        {service.title}
                                    </Card.Title>
                                    <Card.Text
                                        className="flex-grow-1"
                                        style={{ color: '#666' }}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200 + 300}
                                    >
                                        {service.description}
                                    </Card.Text>
                                    <Button
                                        href={service.link}
                                        className="mt-3 px-4 py-2 rounded-pill"
                                        style={{
                                            borderColor: '#ff6c22',
                                            color: '#ffffff',
                                            transition: 'all 0.3s ease',
                                            background: "#ff6c22"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = "#ffffff";
                                            e.target.style.color = "#ff6c22";
                                            e.target.style.borderColor = "#ff6c22";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = "#ff6c22";
                                            e.target.style.color = "#ffffff";
                                            e.target.style.borderColor = "#ff6c22";
                                        }}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200 + 400}
                                    >
                                        Read More
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx>{`
                .card-img-hover:hover {
                    filter: grayscale(0%) !important;
                    transform: scale(1.05);
                }
                .btn-outline-primary:hover {
                    background-color: #ff6c22;
                    color: white !important;
                    border-color: #ff6c22;
                }
                .card {
                    transition: transform 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-10px);
                }
            `}</style>
        </section>
    );
};

export default ProductsSection;