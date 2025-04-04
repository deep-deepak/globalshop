import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import DividerWithIcon from '@/common/DividerWithIcon';
import RollerShutterCTA from '@/common/RollerShutterCTA';

const RollerShutterGallery = () => {
    const [index, setIndex] = useState(0);

    const images = [
        {
            id: 1,
            src: "/images/home4.jpeg",
            alt: "Roller shutter diagram"
        },
        {
            id: 2,
            src: "/images/home3.jpeg",
            alt: "Roller shutter installation worker"
        },
        {
            id: 3,
            src: "/images/home2.jpeg",
            alt: "Roller shutter installation in progress"
        },
        {
            id: 4,
            src: "/images/home1.jpeg",
            alt: "Completed roller shutter installation"
        },
        {
            id: 5,
            src: "/images/service20.avif",
            alt: "Black roller shutter example"
        },
        {
            id: 6,
            src: "/images/hero2.jpg",
            alt: "Gray roller shutter example"
        }
    ];

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="gallery-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <DividerWithIcon />
            <RollerShutterCTA />
            <DividerWithIcon />
            <Container className="mt-4">
                <Row>
                    {/* Slider Column */}
                    <Col
                        lg={6}
                        md={6}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <Card className="shadow border-0 mb-4">
                            <Card.Body>
                                {/* Main Carousel */}
                                <Carousel
                                    activeIndex={index}
                                    onSelect={handleSelect}
                                    interval={null}
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                >
                                    {images.map((image) => (
                                        <Carousel.Item key={image.id}>
                                            <img
                                                className="d-block w-100 rounded"
                                                src={image.src}
                                                alt={image.alt}
                                                style={{
                                                    maxHeight: '400px',
                                                    objectFit: 'cover',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>

                                {/* Thumbnails Row */}
                                <Row className="mt-3">
                                    {images.map((image, idx) => (
                                        <Col
                                            xs={4}
                                            md={2}
                                            key={image.id}
                                            className="mb-2"
                                            data-aos="fade-up"
                                            data-aos-delay={idx * 100 + 300}
                                        >
                                            <img
                                                src={image.src}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className={`w-100 rounded img-thumbnail cursor-pointer ${idx === index ? 'border border-3 border-primary' : ''}`}
                                                onClick={() => setIndex(idx)}
                                                style={{
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    opacity: idx === index ? 1 : 0.7
                                                }}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Content Column */}
                    <Col
                        lg={6}
                        md={6}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <Card className="shadow border-0 h-100">
                            <Card.Body className="p-4">
                                <h2
                                    className=" fw-bold mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    style={{ color: "#ff6c22" }}
                                >
                                    24/7 EMERGENCY ROLLER SHUTTER INSTALLATION & REPAIRS IN THE UK
                                </h2>
                                <p
                                    className="mt-3"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    style={{ lineHeight: '1.6', color: '#666' }}
                                >
                                    Has your roller shutter suddenly developed a fault? Don't worry—our team at <strong>Global Shopfronts</strong> is here to assist you. We specialize in manufacturing, installation, and after-sales services for all types of roller shutters.
                                </p>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    style={{ lineHeight: '1.6', color: '#666' }}
                                >
                                    We also offer a <strong>rapid-response emergency repair and installation service</strong>. While minor issues should be addressed as soon as possible, major malfunctions often demand urgent attention.
                                </p>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    style={{ lineHeight: '1.6', color: '#666' }}
                                >
                                    Contact our UK-based experts 24/7 for fast, professional roller shutter repairs and installations.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .img-thumbnail:hover {
                    opacity: 1 !important;
                    transform: scale(1.05);
                }
                .carousel-item img {
                    border-radius: 8px;
                }
                .card {
                    transition: transform 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                }
            `}</style>
        </section>
    );
};

export default RollerShutterGallery;
