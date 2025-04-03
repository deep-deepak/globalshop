import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DividerWithIcon from '@/common/DividerWithIcon';

const About = () => {
  const headerData = {
    title: "EXPERT ROLLER SHUTTER REPAIR SERVICES IN UK",
    paragraphs: [
      "Global Shopfronts provide prompt, reliable, and efficient 24/7 emergency shutter repair services. We cater to shopfronts, industrial roller shutters, aluminum security doors, security windows, automatic shopfront doors, commercial shutters, retail store shutters, and fire exit doors across the UK.",
      "If your roller shutters or automatic doors sustain damage due to an accident or a break-in attempt, our emergency repair specialists are ready to assist you immediately."
    ]
  };

  const featureSections = [
    {
      id: 1,
      title: "SWIFT SAME-DAY REPAIRS BY SKILLED PROFESSIONALS",
      backgroundColor: "#FFBF00",
      paragraphs: [
        "At <strong>Roller Shutter Repair Service UK</strong>, we pride ourselves on providing <strong>same-day repair services</strong>. This helps minimize security vulnerabilities and downtime. Our teams arrive equipped with fully stocked vans, enabling them to complete most repairs on-site within the same day.",
        "From jammed shutters and motor issues to damaged slats, our experienced technicians quickly diagnose and resolve any issue efficiently."
      ],
      image: "/images/service28.avif",
      imagePosition: "right"
    }
  ];

  return (
    <section className="about-section py-5" style={{ backgroundColor: '#fff' }}>
      <DividerWithIcon />
      <Container className="px-md-4 py-5">
        {/* Header Section */}
        <Row className="mb-5" data-aos="fade-up" data-aos-duration="1000">
          <Col xs={12} className="px-3 px-md-4 text-center">
            <h1
              className="mb-4"
              style={{
                color: '#FF5733',
                fontWeight: 'bold',
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                textTransform: 'uppercase'
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {headerData.title}
            </h1>

            {headerData.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-3"
                style={{ color: '#666', lineHeight: '1.6' }}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                {paragraph}
              </p>
            ))}
          </Col>
        </Row>

        {/* Feature Sections */}
        {featureSections.map((section, index) => (
          <Row
            key={section.id}
            className="mt-5 align-items-center"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {section.imagePosition === "right" ? (
              <>
                <Col xs={12} md={6} className="p-0" data-aos="fade-right" data-aos-delay={index * 200 + 100}>
                  <div
                    className="p-4 p-md-5 h-100 d-flex flex-column justify-content-center shadow-sm"
                    style={{ backgroundColor: section.backgroundColor, transition: 'transform 0.3s ease' }}
                  >
                    <h2
                      className="mb-4 text-dark"
                      style={{ fontWeight: 'bold', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', textTransform: 'uppercase' }}
                      data-aos="fade-up"
                      data-aos-delay={index * 200 + 200}
                    >
                      {section.title}
                    </h2>

                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="mb-3 text-dark"
                        style={{ lineHeight: '1.6' }}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                        data-aos="fade-up"
                        data-aos-delay={index * 200 + 300 + pIndex * 100}
                      />
                    ))}
                  </div>
                </Col>
                <Col xs={12} md={6} className="p-0" data-aos="fade-left" data-aos-delay={index * 200 + 100}>
                  <div
                    className="h-100"
                    style={{
                      backgroundImage: `url("${section.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '480px',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </Col>
              </>
            ) : null}
          </Row>
        ))}
      </Container>
      <style jsx>{`
        .shadow-sm:hover {
          transform: translateY(-5px);
        }
        .h-100:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default About;
