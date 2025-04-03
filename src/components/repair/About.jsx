import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DividerWithIcon from '@/common/DividerWithIcon';

const About = () => {
  const headerData = {
    title: "ROLLER SHUTTER REPAIR SERVICE IN LONDON",
    paragraphs: [
      "Adv Contractors offer a fast, efficient, and reliable 24 hour emergency shutter repair service for shopfronts, industrial roller shutters, aluminum security doors, security windows, shopfront auto doors, commercial shutters, retail shop shutters, and fire exit doors in London.",
      "Whether your roller shutters or automatic doors have been damaged by accident while in use or as a result of an attempted vandalism/break-in, our emergency shutter repair team is here to help."
    ]
  };

  const featureSections = [
    {
      id: 1,
      title: "FAST SAME-DAY COMPLETE REPAIR WORK BY OUR EXPERT TEAMS",
      backgroundColor: "#FFBF00",
      paragraphs: [
        "At <strong>Roller Shutter Repair Service London</strong>, we take pride in offering <strong>fast same-day repair solutions</strong>. Consequently, this will minimize downtime and security risks. Furthermore, our dedicated teams are equipped with fully stocked vans. Thus, our engineers are able to complete most repairs on the spot within the same day.",
        "Whether it's a jammed shutter, motor failure, or damaged slats, our professionals ensure a swift diagnosis and immediate fix."
      ],
      image: "https://advcontractors.co.uk/wp-content/uploads/2024/05/2-1.jpg",
      imagePosition: "right"
    }
    // Add more feature sections here if needed
  ];

  return (
    <section className="about-section py-5" style={{ backgroundColor: '#fff' }}>
      <DividerWithIcon />
      <Container className="px-md-4 py-5">
        {/* Header Section */}
        <Row
          className="mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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
                {/* Content Box */}
                <Col
                  xs={12}
                  md={6}
                  className="p-0"
                  data-aos="fade-right"
                  data-aos-delay={index * 200 + 100}
                >
                  <div
                    className="p-4 p-md-5 h-100 d-flex flex-column justify-content-center shadow-sm"
                    style={{
                      backgroundColor: section.backgroundColor,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <h2
                      className="mb-4 text-dark"
                      style={{
                        fontWeight: 'bold',
                        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                        textTransform: 'uppercase'
                      }}
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

                {/* Image */}
                <Col
                  xs={12}
                  md={6}
                  className="p-0"
                  data-aos="fade-left"
                  data-aos-delay={index * 200 + 100}
                >
                  <div
                    className="h-100"
                    style={{
                      backgroundImage: `url("${section.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '300px',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </Col>
              </>
            ) : (
              <>
                {/* Image (left position) */}
                <Col
                  xs={12}
                  md={6}
                  className="p-0 order-2 order-md-1"
                  data-aos="fade-right"
                  data-aos-delay={index * 200 + 100}
                >
                  <div
                    className="h-100"
                    style={{
                      backgroundImage: `url("${section.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '300px',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </Col>

                {/* Content Box (right position) */}
                <Col
                  xs={12}
                  md={6}
                  className="p-0 order-1 order-md-2"
                  data-aos="fade-left"
                  data-aos-delay={index * 200 + 100}
                >
                  <div
                    className="p-4 p-md-5 h-100 d-flex flex-column justify-content-center shadow-sm"
                    style={{
                      backgroundColor: section.backgroundColor,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <h2
                      className="mb-4 text-dark"
                      style={{
                        fontWeight: 'bold',
                        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                        textTransform: 'uppercase'
                      }}
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
              </>
            )}
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