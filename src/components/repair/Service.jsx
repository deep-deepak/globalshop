import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShippingFast, FaCogs, FaShieldAlt, FaClock } from 'react-icons/fa';

const Service = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast size={40} color="#FF6B35" />,
      title: "Rapid response teams",
      description: "Strategically positioned for quick deployment and fast service."
    },
    {
      id: 2,
      icon: <FaCogs size={40} color="#FF6B35" />,
      title: "State-of-the-art equipment",
      description: "Using advanced tools for efficient and precise repairs."
    },
    {
      id: 3,
      icon: <FaShieldAlt size={40} color="#FF6B35" />,
      title: "Trusted and skilled professionals",
      description: "Highly trained technicians ensuring quality workmanship."
    },
    {
      id: 4,
      icon: <FaClock size={40} color="#FF6B35" />,
      title: "24/7 availability",
      description: "Always ready to assist with emergency repairs and maintenance."
    }
  ];

  return (
    <section className="service-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            color: '#FF6B35',
            fontWeight: '600',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            textTransform: 'uppercase'
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          WHY CHOOSE OUR REPAIR SERVICES:
        </h2>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col
              key={feature.id}
              xs={12}
              md={6}
              lg={3}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Card
                className="h-100 shadow-sm"
                style={{
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease'
                }}
              >
                <Card.Body className="d-flex flex-column align-items-start p-4">
                  <div
                    className="mb-3"
                    data-aos="zoom-in"
                    data-aos-delay={index * 200 + 100}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle bg-light"
                      style={{
                        width: '60px',
                        height: '60px'
                      }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <h5
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      color: '#333'
                    }}
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 200}
                  >
                    {feature.title}
                  </h5>
                  <p
                    className="text-muted mb-0"
                    style={{ lineHeight: '1.6' }}
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 300}
                  >
                    {feature.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row
          className="mt-5"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Col xs={12}>
            <p
              className="text-center"
              style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}
            >
              Our <strong>round-the-clock repair service</strong> ensures that your home or business remains safe and operational. We are committed to delivering fast and reliable solutions tailored to your needs.
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .shadow-sm:hover {
          transform: translateY(-5px);
        }
        .rounded-circle {
          transition: transform 0.3s ease;
        }
        .rounded-circle:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Service;