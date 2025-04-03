import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaTools, FaUserGraduate, FaHeadset } from 'react-icons/fa';

const Service = () => {
  const features = [
    {
      id: 1,
      icon: <FaUsers size={40} color="#FF6B35" />,
      title: "Multiple repair teams",
      description: "strategically located across London for fast dispatch."
    },
    {
      id: 2,
      icon: <FaTools size={40} color="#FF6B35" />,
      title: "Advanced tools and high-quality replacement parts",
      description: "for quick on-site repairs."
    },
    {
      id: 3,
      icon: <FaUserGraduate size={40} color="#FF6B35" />,
      title: "Experienced technicians",
      description: "trained to handle all types of roller shutter issues efficiently."
    },
    {
      id: 4,
      icon: <FaHeadset size={40} color="#FF6B35" />,
      title: "Seamless coordination",
      description: "between customer support and repair teams for prompt service delivery."
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
          HOW WE ENSURE SAME-DAY REPAIRS:
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
              Our <strong>same-day roller shutter repair service</strong> guarantees that your business or home remains secure with minimal disruption. We ensure full repair completion on the same day whenever possible for both an emergency and scheduled maintenance.
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