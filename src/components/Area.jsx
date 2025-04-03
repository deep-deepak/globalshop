import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import Seo from "@/common/Seo";
import PageHeading from "@/common/PageHeading";
import { useRouter } from 'next/router';
import RollerShutterCTA from '../common/RollerShutterCTA';

const ShopfrontService = ({ data }) => {
    console.log("dtaaaa", data);

    const router = useRouter();

    return (
        <div className="shopfront-service-page">
            <Seo
                title={`Shopfronts in ${data.name} | ADV Contractors`}
                description={`Professional shopfront installation and emergency repairs in ${data.name}. Glazed and glass shopfronts for retail stores.`}
            />

            {/* Hero Banner with Image */}
            <div className="hero-banner position-relative" data-aos="fade-down">
                <PageHeading
                    title={`Roller Shutter Repair in ${data.name}`}
                    image="/images/shopfront-banner.jpg"
                />
            </div>

            <Container className="py-5">
                {/* Main Content Section */}
                <Row className="mb-5">
                    <Col lg={8} className="mx-auto" data-aos="fade-up">
                        <div className="main-content">
                            <h2 className="text-center mb-4">Specialized Shopfront Services in {data.name}</h2>
                            <p className="lead">
                                {data.description}
                            </p>
                            <Image
                                src={data.image}
                                alt={`Shopfront installation in ${data.name}`}
                                fluid
                                className="mb-4 rounded shadow"
                                data-aos="zoom-in"
                            />
                        </div>
                    </Col>
                </Row>

                {/* Services Cards */}
                <Row className="mb-5">
                    <Col lg={6} className="mb-4" data-aos="flip-left">
                        <Card className="h-100 shadow">
                            <Card.Header as="h3" style={{ background: "#FF6C22" }} className="text-white">EMERGENCY SHOP FRONT REPLACEMENT</Card.Header>
                            <Card.Body>
                                <p>
                                    {data.emergency}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6} className="mb-4" data-aos="flip-right">
                        <Card className="h-100 shadow">
                            <Card.Header as="h3" style={{ background: "#FF6C22" }} className="text-white">UPGRADE YOUR SHOP FRONT GLASS</Card.Header>
                            <Card.Body>
                                {data.upgrade}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Additional Information Section */}
                <RollerShutterCTA data-aos="fade-up" />
                <Row className='mt-3'>
                    <Col lg={8} className="mx-auto" data-aos="fade-up">
                        <Card className="mb-4 shadow-sm">
                            <Card.Body>
                                <h3 className="mb-3">Why Choose ADV Contractors for {data.name} Shopfronts?</h3>
                                <ul className="list-unstyled">
                                    {data.whyChoose.map((ele, index) => (
                                        <li key={index} className="mb-2" data-aos="fade-right">✓ {ele}</li>
                                    ))}
                                </ul>
                                <Button

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
                                    data-aos-delay={200}
                                    onClick={() => router.push("/contact")}
                                >
                                    Contact Us Today
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShopfrontService;