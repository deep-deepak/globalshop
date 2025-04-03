import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import BlinkingText from '@/common/BlinkingText'
import { GrLinkNext } from "react-icons/gr";

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
    { icon: <FaFacebookF size={18} style={{ color: "#ff6c22" }} />, path: 'https://www.facebook.com/' },
    { icon: <FaTwitter size={18} style={{ color: "#ff6c22" }} />, path: 'https://twitter.com/' },
    { icon: <FaPinterestP size={18} style={{ color: "#ff6c22" }} />, path: 'https://www.pinterest.com/' },
    { icon: <FaLinkedinIn size={18} style={{ color: "#ff6c22" }} />, path: 'https://www.linkedin.com/' },
    { icon: <FaYoutube size={18} style={{ color: "#ff6c22" }} />, path: 'https://www.youtube.com/' },
    { icon: <FaInstagram size={18} style={{ color: "#ff6c22" }} />, path: 'https://www.instagram.com/' },
];

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row className="gy-4">
                    <Col lg={3} md={6}>
                        <h5 className="mb-4 text-uppercase fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <Link href={link.path} className="text-light text-decoration-none hover:text-primary d-flex align-items-center">
                                        <span className="me-2" style={{ color: "#ff6c22" }} ><GrLinkNext /></span>{link.name.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={3} md={6}>
                        <h5 className="mb-4 text-uppercase fw-bold">Services</h5>
                        <ul className="list-unstyled">
                            {services.map((service, index) => (
                                <li key={index} className="mb-2">
                                    <Link href={service.path} className="text-light text-decoration-none hover:text-primary d-flex align-items-center">
                                        <span className="me-2" style={{ color: "#ff6c22" }} ><GrLinkNext /></span>{service.name.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={6} md={12}>
                        <h5 className="mb-4 text-uppercase fw-bold">Contact Information</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex">
                                <BlinkingText text={<MdLocationOn size={24} className="me-3 text-white" />} />

                                <div>
                                    <p className="mb-0">New Location</p>
                                    <p className="mb-0">12 Wintson close,Sg5 2hb,</p>
                                    <p className="mb-0">City Hitchin, United Kingdom</p>
                                </div>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <BlinkingText text={<MdPhone size={24} className="me-3 text-white" />} />
                                <p className="mb-0">+44 7735559454</p>
                            </li>
                            <li className="mb-4 d-flex align-items-center">
                                <BlinkingText text={<MdEmail size={24} className="me-3 text-white" />} />
                                <p className="mb-0">globalshopfrontsandshutters@gmail.com</p>
                            </li>
                            <li>
                                <div className="d-flex gap-3 social_icons">
                                    {socialLinks.map((social, index) => (
                                        <Link key={index} href={social.path} target='_blank' className="text-light p-2" >
                                            {social.icon}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
