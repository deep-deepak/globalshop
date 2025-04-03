import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
    FaPhone,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram
} from 'react-icons/fa';
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeroSection = () => {

    const router = useRouter()
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                backgroundImage: 'url("https://img.freepik.com/free-photo/warehouse-storage-units-with-blue-doors_53876-64701.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingTop: '76px',
                paddingBottom: '40px'
            }}
        >
            {/* Semi-transparent overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            />

            {/* Content container */}
            <Container className="position-relative">
                {/* Main content box */}
                <div
                    className="bg-white bg-opacity-90 p-4 p-md-5 mx-auto my-5 rounded-3"
                    style={{ maxWidth: '1200px' }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <Row className="align-items-center">
                        {/* Left side content */}
                        <Col md={7} className="pe-md-4">
                            <h1
                                className="mb-3"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <span style={{ color: '#ff6c22', fontWeight: 'bold' }}>GLOBAL SHOP</span>
                                <span style={{ color: '#6c757d', fontWeight: 'bold' }}> CONTRACTORS - </span>
                                <span style={{ color: '#ff6c22', fontWeight: 'bold' }}>ROLLER SHUTTER SERVICES</span>
                                <span style={{ color: '#6c757d', fontWeight: 'bold' }}> IN UK</span>
                            </h1>

                            <p
                                className="mb-4"
                                style={{ color: '#212529', fontSize: '1rem' }}
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                A professional company specializing in the installation, repair, replacement, and maintenance of all types of roller shutters, shopfront doors, and more.
                            </p>

                            <div
                                className="d-flex flex-wrap gap-3 mb-4"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <Button
                                    variant="primary"
                                    className="px-4 py-2"
                                    style={{ backgroundColor: '#ff6c22', borderColor: '#ff6c22' }}
                                    onClick={() => router.push('/contact')}
                                >
                                    CONTACT US
                                </Button>
                                <Button
                                    variant="primary"
                                    className="px-4 py-2"
                                    style={{ backgroundColor: '#ff6c22', borderColor: '#ff6c22' }}
                                    onClick={() => router.push('/contact')}
                                >
                                    GET A QUOTE
                                </Button>
                            </div>

                            <div
                                className="d-flex align-items-center mb-3"
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <div className="me-3" style={{ backgroundColor: '#ff6c22', borderRadius: '50%', padding: '8px' }}>
                                    <FaPhone size={20} color="white" />
                                </div>
                                <Link
                                    href="tel:+447735559454"
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    +44 7735559454
                                </Link>

                            </div>

                            <div
                                className="d-flex align-items-center mb-4"
                                data-aos="fade-right"
                                data-aos-delay="600"
                            >
                                <div className="me-3" style={{ backgroundColor: '#ff6c22', borderRadius: '50%', padding: '8px' }}>
                                    <FaEnvelope size={20} color="white" />
                                </div>
                                <Link
                                    href="mailto:globalshopfrontsandshutters@gmail.com"
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    globalshopfrontsandshutters@gmail.com
                                </Link>

                            </div>

                            <div
                                className="d-flex gap-2 mt-4"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                                    <FaFacebookF size={20} color="#ff6c22" />
                                </div>
                                <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                                    <FaTwitter size={20} color="#ff6c22" />
                                </div>
                                <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                                    <FaPinterestP size={20} color="#ff6c22" />
                                </div>
                                <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                                    <FaLinkedinIn size={20} color="#ff6c22" />
                                </div>
                                <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                                    <FaYoutube size={20} color="#ff6c22" />
                                </div>
                                <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                                    <FaInstagram size={20} color="#ff6c22" />
                                </div>
                            </div>
                        </Col>

                        {/* Right side images */}
                        <Col md={5} className="mt-4 mt-md-0">
                            <div className="d-flex flex-column gap-3">
                                <div
                                    style={{
                                        border: '3px solid #ff6c22',
                                        borderRadius: '50%',
                                        padding: '6px',
                                        overflow: 'hidden'
                                    }}
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                >
                                    <img
                                        src="/images/hero1.jpg"
                                        alt="Roller shutter installation"
                                        className="img-fluid rounded-circle"
                                        style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                    />
                                </div>
                                <div
                                    style={{
                                        border: '3px solid #ff6c22',
                                        borderRadius: '50%',
                                        padding: '6px',
                                        overflow: 'hidden',
                                        marginTop: '-25%',
                                        marginLeft: '40%'
                                    }}
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                >
                                    <img
                                        src="images/hero2.jpg"
                                        alt="Shopfront installation"
                                        className="img-fluid rounded-circle"
                                        style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;