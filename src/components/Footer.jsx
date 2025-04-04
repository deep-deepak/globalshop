import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import BlinkingText from '@/common/BlinkingText';
import { BsArrowRightShort } from "react-icons/bs";

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Service', path: '/category' },
];

const services = [
    { name: 'Fire Rated Shutters', path: '/services/fire-rated-shutters' },
    { name: 'Automatic Roller Shutter Doors', path: '/services/automatic-roller-shutter-doors' },
    { name: 'Emergency Repair', path: '/services/emergency-repair' },
    { name: 'High-Speed Roller Shutter Doors', path: '/services/high-speed-roller-shutter-doors' },
    { name: 'Security Roller Shutter', path: '/services/security-roller-shutter' },
];

const socialLinks = [
    { icon: <FaFacebookF size={16} />, path: 'https://www.facebook.com/' },
    { icon: <FaTwitter size={16} />, path: 'https://twitter.com/' },
    { icon: <FaLinkedinIn size={16} />, path: 'https://www.linkedin.com/' },
    { icon: <FaInstagram size={16} />, path: 'https://www.instagram.com/' },
    { icon: <FaYoutube size={16} />, path: 'https://www.youtube.com/' },
    { icon: <FaPinterestP size={16} />, path: 'https://www.pinterest.com/' },
];

const Footer = () => {
    return (
        <>
            <footer className="pt-5" style={{ background: '#222831' }}>
                <Container>
                    <Row className="gy-4 pb-5">
                        <Col lg={3} md={6}>
                            <div className="footer-section">
                                <h5 className="mb-4 position-relative" style={{
                                    color: '#fff',
                                    fontWeight: '600',
                                    paddingBottom: '12px',
                                    borderBottom: '3px solid #ff6c22',
                                    display: 'inline-block'
                                }}>
                                    QUICK LINKS
                                </h5>
                                <ul className="list-unstyled">
                                    {quickLinks.map((link, index) => (
                                        <li key={index} className="mb-3">
                                            <Link
                                                href={link.path}
                                                className="text-light text-decoration-none d-flex align-items-center"
                                                style={{ transition: 'all 0.3s ease' }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#ff6c22';
                                                    e.target.style.paddingLeft = '5px';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#fff';
                                                    e.target.style.paddingLeft = '0px';
                                                }}
                                            >
                                                <BsArrowRightShort size={20} style={{ color: "#ff6c22" }} className="me-2" />
                                                {link.name.toUpperCase()}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div className="footer-section">
                                <h5 className="mb-4 position-relative" style={{
                                    color: '#fff',
                                    fontWeight: '600',
                                    paddingBottom: '12px',
                                    borderBottom: '3px solid #ff6c22',
                                    display: 'inline-block'
                                }}>
                                    OUR SERVICES
                                </h5>
                                <ul className="list-unstyled">
                                    {services.map((service, index) => (
                                        <li key={index} className="mb-3">
                                            <Link
                                                href={service.path}
                                                className="text-light text-decoration-none d-flex align-items-center"
                                                style={{ transition: 'all 0.3s ease' }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = '#ff6c22';
                                                    e.target.style.paddingLeft = '5px';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#fff';
                                                    e.target.style.paddingLeft = '0px';
                                                }}
                                            >
                                                <BsArrowRightShort size={20} style={{ color: "#ff6c22" }} className="me-2" />
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        <Col lg={6} md={12}>
                            <div className="footer-section ps-lg-4">
                                <h5 className="mb-4 position-relative" style={{
                                    color: '#fff',
                                    fontWeight: '600',
                                    paddingBottom: '12px',
                                    borderBottom: '3px solid #ff6c22',
                                    display: 'inline-block'
                                }}>
                                    CONTACT INFORMATION
                                </h5>
                                <ul className="list-unstyled">
                                    <li className="mb-4 d-flex">
                                        <div className="contact-icon me-3" style={{
                                            background: "#ff6c22",
                                            color: "white",
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <MdLocationOn size={20} />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-bold" style={{ color: "#ff6c22" }}>Location:</p>
                                            <p className="mb-0 text-white">12 Wintson close, Sg5 2hb,</p>
                                            <p className="mb-0 text-white">City Hitchin, United Kingdom</p>
                                        </div>
                                    </li>
                                    <li className="mb-4 d-flex align-items-center">
                                        <div className="contact-icon me-3" style={{
                                            background: "#ff6c22",
                                            color: "white",
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <MdPhone size={20} />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-bold" style={{ color: "#ff6c22" }}>Phone:</p>
                                            <p className="mb-0  text-white">+44 7735559454</p>
                                        </div>
                                    </li>
                                    <li className="mb-4 d-flex align-items-center">
                                        <div className="contact-icon me-3" style={{
                                            background: "#ff6c22",
                                            color: "white",
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <MdEmail size={20} />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-bold" style={{ color: "#ff6c22" }}>Email:</p>
                                            <p className="mb-0  text-white">gshopfronts@gmail.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="mb-3" style={{ color: "#ff6c22" }}>FOLLOW US:</h6>
                                        <div className="d-flex gap-2 social_icons">
                                            {socialLinks.map((social, index) => (
                                                <Link
                                                    key={index}
                                                    href={social.path}
                                                    target='_blank'
                                                    style={{
                                                        background: 'rgba(255,255,255,0.1)',
                                                        width: '36px',
                                                        height: '36px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#fff',
                                                        transition: 'all 0.3s ease',
                                                        border: '1px solid transparent'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.background = '#ff6c22';
                                                        e.target.style.borderColor = '#ff6c22';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.background = 'rgba(255,255,255,0.1)';
                                                        e.target.style.borderColor = 'transparent';
                                                    }}
                                                >
                                                    {social.icon}
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="py-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', background: '#1a1e25' }}>
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} className="text-center text-white text-md-start">
                                <p className="mb-0 small">© {new Date().getFullYear()} Global Shopfronts and shutters. All Rights Reserved.</p>
                            </Col>
                            <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
                                <p className="mb-0 small text-white">
                                    Designed by <span style={{ color: "#ff6c22" }}>Global Shopfronts and shutters</span>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;