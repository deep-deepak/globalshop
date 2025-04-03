import DividerWithIcon from '@/common/DividerWithIcon';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaTools,
  FaUserShield,
  FaGraduationCap,
  FaUsers,
  FaTrophy
} from 'react-icons/fa';

const RollerShutterFeatures = () => {
  const features = [
    {
      icon: <FaTools size={40} />,
      title: "LONG-LASTING PERFORMANCE",
      description: [
        "Aging roller shutters require regular upkeep to extend their lifespan and reduce the need for new installations. In London, we are a trusted name for maintenance, delivering top-tier service for ",
        { text: "modern shopfronts & shutters", bold: true },
        ". Our experienced team ensures every component operates smoothly, minimizing unexpected breakdowns."
      ]
    },
    {
      icon: <FaUserShield size={40} />,
      title: "ENHANCED PRIVACY AND SECURITY",
      description: [
        "Our ",
        { text: "roller shutter installations", bold: true },
        " provide more than just ",
        { text: "security", color: '#ff6c22' },
        ". They offer privacy, insulation, noise reduction, and improve the overall appearance of your property. Designed to adapt to varying environments, our shutters ensure comfort, peace, and a stylish look for your premises."
      ]
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "PROFESSIONALISM YOU CAN TRUST",
      description: [
        "Well-designed roller shutters not only protect but also enhance the look of commercial spaces. We recognize the importance of aesthetics in business settings. That’s why we specialize in ",
        { text: "installation, repair, and replacement", bold: true },
        " of security grilles, shutters, and curtain walls. Our skilled ",
        { text: "roller shutter experts", bold: true },
        " work closely with you to ensure the best possible results."
      ]
    },
    {
      icon: <FaUsers size={40} />,
      title: "24/7 EMERGENCY ASSISTANCE",
      description: [
        "If your shutters malfunction or sustain damage, rely on our rapid response team to restore them quickly. Our services include installations, post-sale support, and emergency repairs. Our highly trained professionals ensure your roller shutters remain in peak condition round the clock."
      ]
    },
    {
      icon: <FaTrophy size={40} />,
      title: "EXPERIENCE THE BEST WITH GLOBAL SHOPFRONTS",
      description: [
        "From concept to ",
        { text: "shutter installation", bold: true },
        ", and from ",
        { text: "maintenance to urgent repairs", bold: true },
        ", ",
        { text: "Global Shopfronts", bold: true },
        " delivers a full spectrum of roller shutter solutions. Our dedication to innovation, quality, and superior service makes us a trusted partner for securing your property. Your safety is our top priority, and we go the extra mile to ensure your satisfaction."
      ]
    }
  ];

  const renderText = (textParts) => {
    return textParts.map((part, index) => {
      if (typeof part === 'string') {
        return part;
      } else {
        return (
          <span
            key={index}
            style={{
              fontWeight: part.bold ? 'bold' : 'normal',
              color: part.color || 'inherit'
            }}
          >
            {part.text}
          </span>
        );
      }
    });
  };

  return (
    <section className="features-section py-5" style={{ backgroundColor: '#fff' }}>
      <DividerWithIcon />
      <Container className="px-4 py-4">
        {features.map((feature, index) => (
          <Row
            key={index}
            className="mb-5 align-items-start"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <Col xs={12} md={3} lg={2} className="mb-3 mb-md-0">
              <div
                className="d-flex justify-content-center align-items-center rounded-circle shadow-sm"
                style={{
                  backgroundColor: '#ff6c22',
                  color: 'white',
                  width: '100px',
                  height: '100px',
                  maxWidth: '100%',
                  transition: 'transform 0.3s ease'
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 200 + 100}
              >
                {feature.icon}
              </div>
            </Col>
            <Col xs={12} md={9} lg={10}>
              <h3
                className="mb-3 fw-bold"
                style={{ color: '#333' }}
                data-aos="fade-right"
                data-aos-delay={index * 200 + 200}
              >
                {feature.title}
              </h3>
              <p
                style={{ color: '#666', lineHeight: '1.6' }}
                data-aos="fade-right"
                data-aos-delay={index * 200 + 300}
              >
                {renderText(feature.description)}
              </p>
            </Col>
          </Row>
        ))}
      </Container>

      <style jsx>{`
        .rounded-circle:hover {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .rounded-circle {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default RollerShutterFeatures;
