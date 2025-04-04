import PageHeading from '@/common/PageHeading';
import Seo from '@/common/Seo';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    const [activeTab, setActiveTab] = useState('mission');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="about-page">
            <Seo title={'About Us'} description={'Learn more about Global Shopfronts'} />
            <PageHeading title={'About Us'} image={'/images/gallery1.jpg'} />

            {/* Hero Section with Parallax Effect */}
            <Container fluid className="py-5 bg-light position-relative overflow-hidden">
                <div className="decorative-shape"></div>
                <Row className="justify-content-center align-items-center mx-4 mx-md-5 gy-4">
                    <Col lg={6} className="pe-lg-5" data-aos="fade-right">
                        <div className="position-relative rounded overflow-hidden image-container">
                            <img
                                src="/images/commerce.avif"
                                alt="Modern Commercial Building"
                                className="img-fluid w-100 rounded"
                                data-aos="zoom-in"
                            />
                            <div className="img-overlay"></div>
                        </div>
                    </Col>

                    <Col lg={6} className="ps-lg-5" data-aos="fade-left">
                        <div className="content-box">
                            <h2 className="fw-bold text-uppercase text-orange mb-4 display-5">
                                <span className="highlight-text">Innovating</span> Shopfront Solutions
                            </h2>
                            <p className="mb-4 fs-5 text-dark" style={{ lineHeight: '1.8' }}>
                                At <strong className="text-orange">Global Shopfronts</strong>, we specialize in cutting-edge shopfront designs, ensuring security, aesthetics, and durability for commercial spaces. With expertise spanning over a decade, we craft high-quality architectural solutions tailored to your business needs.
                            </p>
                            <div className="accent-line"></div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Philosophy Section with Interactive Tabs */}
            <Container fluid className="p-0">
                <Row className="mx-0">
                    <Col md={6} className="bg-gradient-orange text-white p-5 philosophy-section" style={{ background: "#ff6c22" }}>
                        <h2 className="text-uppercase mb-5 display-5 fw-bold with-underline">Our Philosophy</h2>

                        <div className="tab-container">
                            <div className={`tab-header ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => setActiveTab('mission')}>
                                <h3 className="text-uppercase m-0">Our Mission</h3>
                            </div>
                            <div className={`tab-content ${activeTab === 'mission' ? 'show' : ''}`}>
                                <p data-aos="fade-up">
                                    We are committed to designing state-of-the-art shopfronts that not only enhance security but also elevate the brand presence of businesses. Our mission is to deliver innovative, high-performance solutions that exceed industry standards.
                                </p>
                            </div>
                        </div>

                        <div className="tab-container">
                            <div className={`tab-header ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => setActiveTab('vision')}>
                                <h3 className="text-uppercase m-0">Our Vision</h3>
                            </div>
                            <div className={`tab-content ${activeTab === 'vision' ? 'show' : ''}`}>
                                <p data-aos="fade-up">
                                    Our vision is to be the global leader in modern, secure, and stylish shopfront solutions, pioneering advancements in the industry while maintaining a commitment to sustainability and excellence.
                                </p>
                            </div>
                        </div>

                        <div className="tab-container">
                            <div className={`tab-header ${activeTab === 'values' ? 'active' : ''}`} onClick={() => setActiveTab('values')}>
                                <h3 className="text-uppercase m-0">Our Values</h3>
                            </div>
                            <div className={`tab-content ${activeTab === 'values' ? 'show' : ''}`}>
                                <p data-aos="fade-up">
                                    At <strong>Global Shopfronts</strong>, we stand by integrity, innovation, and quality craftsmanship. Our goal is to build long-lasting relationships with clients by consistently delivering superior products and services.
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="p-0 d-flex align-items-stretch">
                        <div className="who-we-are-section">
                            <div className="content-wrapper">
                                <h2 className="text-uppercase mb-4 display-6 fw-bold">Who We Are</h2>
                                <p className="mb-4 fs-5" data-aos="fade-up">
                                    From concept to completion, <strong>Global Shopfronts</strong> delivers bespoke solutions tailored to modern commercial environments. Our team of specialists ensures high-quality workmanship and attention to detail, making us the go-to provider for premium shopfront installations.
                                </p>
                                <div className="experience-badge">
                                    <span className="years">10+</span>
                                    <span className="text">Years Experience</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .about-page {
                    --orange-primary: #FF6C22;
                    --orange-secondary: #ff5003;
                    --dark-bg: #222222;
                }
                
                .bg-gradient-orange {
                    background: linear-gradient(135deg, var(--orange-primary), var(--orange-secondary));
                }
                
                .text-orange {
                    color: var(--orange-primary) !important;
                }
                
                .highlight-text {
                    position: relative;
                    z-index: 1;
                }
                
                .highlight-text::after {
                    content: '';
                    position: absolute;
                    bottom: 5px;
                    left: 0;
                    width: 100%;
                    height: 8px;
                    background-color: rgba(255, 108, 34, 0.3);
                    z-index: -1;
                }
                
                .with-underline {
                    position: relative;
                    display: inline-block;
                }
                
                .with-underline::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 80px;
                    height: 4px;
                    background-color: white;
                }
                
                .image-container {
                    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
                    transition: transform 0.3s ease;
                    overflow: hidden;
                }
                
                .image-container:hover {
                    transform: translateY(-5px);
                }
                
                .img-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom right, rgba(255,108,34,0.2), transparent);
                }
                
                .content-box {
                    position: relative;
                    padding: 30px;
                    border-radius: 8px;
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
                }
                
                .accent-line {
                    width: 80px;
                    height: 4px;
                    background-color: var(--orange-primary);
                    margin-top: 20px;
                }
                
                .decorative-shape {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    background-color: rgba(255, 108, 34, 0.1);
                    border-radius: 50%;
                    top: -150px;
                    right: -150px;
                    z-index: 0;
                }
                
                .philosophy-section {
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                
                .philosophy-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 200px;
                    height: 200px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    transform: translate(50%, -50%);
                    z-index: -1;
                }
                
                .tab-container {
                    margin-bottom: 20px;
                    border-radius: 8px;
                    overflow: hidden;
                    background-color: rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .tab-header {
                    padding: 15px 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    border-left: 4px solid transparent;
                }
                
                .tab-header:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
                
                .tab-header.active {
                    background-color: rgba(255, 255, 255, 0.2);
                    border-left: 4px solid white;
                }
                
                .tab-header.active h3 {
                    color: white;
                    font-weight: 700;
                }
                
                .tab-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease;
                    padding: 0 20px;
                }
                
                .tab-content.show {
                    max-height: 200px;
                    padding: 15px 20px 20px;
                }
                
                .who-we-are-section {
                    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/gallery1.jpg');
                    background-size: cover;
                    background-position: center;
                    color: white;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    position: relative;
                }
                
                .content-wrapper {
                    padding: 60px 40px;
                    position: relative;
                    z-index: 2;
                }
                
                .experience-badge {
                    position: absolute;
                    bottom: 0;
                    right: 30px;
                    background-color: var(--orange-primary);
                    padding: 15px;
                    width: 120px;
                    height: 120px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    text-align: center;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                    animation: ${animate ? 'pulse 2s infinite' : 'none'};
                }
                
                .experience-badge .years {
                    font-size: 2.5rem;
                    font-weight: 700;
                    line-height: 1;
                }
                
                .experience-badge .text {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                }
                
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
}