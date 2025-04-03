import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCards = () => {
    const services = [
        { id: 1, title: 'Roller Shutter Repairs', description: 'Comprehensive repair solutions for roller shutters, ensuring smooth operation, enhanced security, and longevity for your business or home.' },
        { id: 2, title: 'Expert Window Installation', description: 'Seamless window installation for enhanced energy efficiency, aesthetics, and security, using premium materials for lasting durability.' },
        { id: 3, title: 'Emergency Shutter Repairs', description: 'Rapid response emergency shutter repair service available 24/7 to restore security and functionality in urgent situations.' },
        { id: 4, title: 'Premium Aluminum Doors', description: 'High-quality aluminum doors designed for durability, modern appeal, and superior security, ideal for both commercial and residential spaces.' },
        { id: 5, title: 'Business Infrastructure Solutions', description: 'Providing top-tier glass doors, security shutters, and shopfront enhancements to improve functionality and aesthetics for commercial buildings.' },
        { id: 6, title: 'Automatic Door Installations', description: 'Upgrade your business entrance with modern, hands-free automatic doors, ensuring convenience, efficiency, and a sleek appearance.' },
        { id: 7, title: 'Commercial Door Systems', description: 'Professional installation of advanced automatic doors, improving accessibility, safety, and the contemporary look of your premises.' },
        { id: 8, title: 'Custom Solutions for Businesses', description: 'Tailored shopfront, security, and maintenance services for commercial establishments, ensuring a secure and stylish appearance.' },
        { id: 9, title: 'Complete Glass & Window Repairs', description: 'Meticulous repair services for damaged windows and glass, restoring safety, functionality, and visual appeal efficiently.' },
        { id: 10, title: 'Curtain Wall Systems', description: 'Modern curtain walling solutions that add architectural elegance, energy efficiency, and resilience to commercial buildings.' },
        { id: 11, title: 'Exceptional Customer Support', description: 'Dedicated customer service, providing prompt and professional assistance for all shopfront, door, and repair-related inquiries.' },
        { id: 12, title: 'Glass Damage Restoration', description: 'Quick and reliable repair services for broken or cracked glass, ensuring structural integrity and aesthetic restoration.' },
        { id: 13, title: 'Efficient Window Repairs', description: 'Specialized window repair services to restore functionality, improve insulation, and maintain the appearance of your property.' },
        { id: 14, title: 'Roller Shutter Maintenance', description: 'Professional repair and maintenance services for roller shutters to keep your business secure and operational at all times.' },
        { id: 15, title: 'High-Security Shutters', description: 'Robust security shutter installations designed to protect your premises while complementing its visual appeal.' },
        { id: 16, title: 'Custom Shopfront Solutions', description: 'Bespoke shopfront designs and installations that enhance storefront appeal, security, and customer accessibility.' },
        { id: 17, title: 'Sleek Sliding Doors', description: 'Modern sliding door installations that maximize space efficiency while providing effortless access and stylish aesthetics.' }
    ];

    return (
        <Container className="py-5" style={{ backgroundColor: '#FFF4E1', marginTop: '80px' }}>
            <Row className="mb-4" data-aos="fade-up">
                <Col className="text-center">
                    <h2 className="fw-bold" style={{ color: '#FF6C22' }}>Our Services</h2>
                    <p className="lead" style={{ color: '#333' }}>Discover our wide range of professional shopfront and repair solutions</p>
                </Col>
            </Row>
            <Row>
                {services.map((service, index) => (
                    <Col key={service.id} xs={12} md={4} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                        <Card className="h-100 border-0 shadow-sm" style={{ transition: 'transform 0.3s ease', borderRadius: '10px' }}>
                            <Card.Body className="d-flex flex-column p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Card.Title className="fs-4 mb-0 fw-bold" style={{ color: '#FF6C22' }}>{service.title}</Card.Title>
                                    <div className="bg-light rounded-circle p-2" style={{ border: '1px solid #FF6C22' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF6C22" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" />
                                        </svg>
                                    </div>
                                </div>
                                <Card.Text className="text-muted" style={{ lineHeight: '1.6' }}>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ServiceCards;
