import PageHeading from '@/common/PageHeading';
import Seo from '@/common/Seo';
import ServiceArea from '@/components/ServiceArea';
import Layout from '@/layout/Layout';
import React, { } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {


    return (
        <Layout>
            <Seo title={"Contact us"} descrption={"contact us"} />
            <PageHeading title={"Contact us"} image={"https://londonshopfitters.co.uk/wp-content/uploads/2022/03/pexels-olga-lioncat-7245368-scaled.jpg"} />

            <Container className="py-5">
                <Row className="justify-content-between">
                    <Col lg={5} data-aos="fade-right" data-aos-delay={100}>
                        <div className="contact-info-card p-4 mb-4" style={{ borderLeft: "4px solid #FF6C22", background: "#f8f9fa", borderRadius: "8px" }}>
                            <h3 className="mb-4" style={{ color: "#333", borderBottom: "2px solid #FF6C22", paddingBottom: "10px", display: "inline-block" }}>Contact Information</h3>

                            <div className="d-flex align-items-center mb-4">
                                <div className="contact-icon me-3" style={{ background: "#FF6C22", color: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i className="bi bi-building"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Name:</h5>
                                    <p className="mb-0 fw-bold" style={{ color: "#FF6C22" }}>Global Shopfronts and shutters</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="contact-icon me-3" style={{ background: "#FF6C22", color: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i className="bi bi-telephone"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1"> Phone:</h5>
                                    <p className="mb-0 fw-bold" style={{ color: "#FF6C22" }}>+44 7735559454</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="contact-icon me-3" style={{ background: "#FF6C22", color: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i className="bi bi-envelope"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">E-mail:</h5>
                                    <a href="mailto:gshopfronts@gmail.com" className="text-decoration-none fw-bold" style={{ color: "#FF6C22" }}>
                                        gshopfronts@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="contact-icon me-3" style={{ background: "#FF6C22", color: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Address:</h5>
                                    <p className="mb-0 fw-bold" style={{ color: "#FF6C22" }}>
                                        12 Wintson close, Sg5 2hb,<br />
                                        city Hitchin
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="business-hours p-4 mt-4" style={{ borderLeft: "4px solid #FF6C22", background: "#f8f9fa", borderRadius: "8px" }} data-aos="fade-up" data-aos-delay={200}>
                            <h4 style={{ color: "#333", borderBottom: "2px solid #FF6C22", paddingBottom: "10px", display: "inline-block" }}>Business Hours</h4>
                            <ul className="list-unstyled mt-3">
                                <li className="d-flex justify-content-between py-2">
                                    <span>Monday - Friday:</span>
                                    <span style={{ color: "#FF6C22", fontWeight: "bold" }}>24/7</span>
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                    <span>Saturday:</span>
                                    <span style={{ color: "#FF6C22", fontWeight: "bold" }}>24/7</span>
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                    <span>Sunday:</span>
                                    <span style={{ color: "#FF6C22", fontWeight: "bold" }}>Opened</span>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={6} data-aos="fade-left" data-aos-delay={200}>
                        <div className="form-wrapper" style={{ borderTop: "5px solid #FF6C22", borderRadius: "8px", overflow: "hidden" }}>
                            <div className="form-header p-4" style={{ background: "#FF6C22" }}>
                                <h3 className="m-0 text-white">Send us a message</h3>
                            </div>
                            <Form className="bg-white p-4 shadow-sm">
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontWeight: "500" }}>Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        style={{ borderColor: "#ced4da", padding: "12px", borderRadius: "6px" }}
                                        className="shadow-sm"
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontWeight: "500" }}>Phone</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                style={{ borderColor: "#ced4da", padding: "12px", borderRadius: "6px" }}
                                                className="shadow-sm"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontWeight: "500" }}>Email <span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                style={{ borderColor: "#ced4da", padding: "12px", borderRadius: "6px" }}
                                                className="shadow-sm"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontWeight: "500" }}>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="What is this regarding?"
                                        style={{ borderColor: "#ced4da", padding: "12px", borderRadius: "6px" }}
                                        className="shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontWeight: "500" }}>Message <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter your message"
                                        required
                                        style={{ borderColor: "#ced4da", padding: "12px", borderRadius: "6px" }}
                                        className="shadow-sm"
                                    />
                                </Form.Group>

                                <div className="text-end">
                                    <Button
                                        className="mt-3 px-4 py-2 rounded-pill"
                                        style={{
                                            borderColor: '#ff6c22',
                                            color: '#ffffff',
                                            transition: 'all 0.3s ease',
                                            background: "#ff6c22",
                                            fontWeight: "600",
                                            letterSpacing: "1px"
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
                                    >
                                        SUBMIT MESSAGE
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col md={6}>
                    <div className="map-section" style={{ position: "relative" }}>
                        <div className="map-header" style={{ background: "#FF6C22", padding: "15px 0", textAlign: "center" }}>
                            <h4 className="m-0 text-white">Find Us On The Map</h4>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d78695.45843619261!2d-0.36700400452148574!3d51.9479410412529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x487633f7909271e3%3A0x77c9343bca794a7a!2s2%20Winston%20Close%2C%20Hitchin%20SG5%202HB%2C%20UK!3m2!1d51.947969799999996!2d-0.2846042!4m0!5e0!3m2!1sen!2sin!4v1743657221460!5m2!1sen!2sin"
                            width="100%"
                            height="440"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </Col>
                <Col md={6}>
                    <ServiceArea />
                </Col>
            </Row>

        </Layout>
    );
};

export default ContactForm;