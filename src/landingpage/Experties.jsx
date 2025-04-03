import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import DividerWithIcon from '@/common/DividerWithIcon';
import RollerShutterCTA from '@/common/RollerShutterCTA';

const ExpertiseSection = () => {
  return (
    <>
      <DividerWithIcon />
      <RollerShutterCTA />
      <DividerWithIcon />
      <Container className="py-5">
        <Row className="align-items-center aos-init aos-animate" data-aos="fade-up">
          <Col lg={6} md={12} className="mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-right">
            <Image
              src="https://advcontractors.co.uk/wp-content/uploads/2025/03/Roller-Shutters-1024x768.jpg"
              alt="Roller shutters installed on a building"
              fluid
              className="w-100"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </Col>
          <Col lg={6} md={12} className="aos-init aos-animate" data-aos="fade-left">
            <div>
              <h2 className="mb-4" style={{ color: '#ff6c22', fontWeight: '600' }}>
                MAINTAINING YOUR ROLLER SHUTTERS FOR LONGEVITY
              </h2>

              <p className="mb-4">
                As the demand for <strong>Roller Shutter Installations in the UK</strong> continues to grow, Global Shopfronts is your trusted partner for top-quality solutions. From design and manufacturing to installation, we follow strict industry standards to ensure durable and efficient roller shutters. Looking for a custom fit? Our team provides tailored roller shutter solutions to meet your specific needs. Plus, we offer a 12-month warranty and premium aftercare services to keep your shutters in optimal condition.
              </p>

              <p>
                If you need a secure, insulated, and weather-resistant way to safeguard your property, roller shutters are the ideal choice. Get in touch with our UK-based team today to discuss the best shutter solutions for your premises.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExpertiseSection;
