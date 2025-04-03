import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DividerWithIcon from '@/common/DividerWithIcon';

const Work = () => {
    const stats = [
        {
            id: 1,
            value: 100,
            suffix: "%",
            label: "Satisfied customers"
        },
        {
            id: 2,
            value: 8079,
            suffix: "",
            label: "Installed product"
        },
        {
            id: 3,
            value: 274,
            suffix: "",
            label: "Reviews"
        },
        {
            id: 4,
            value: 4.9,
            suffix: "",
            label: "Rating"
        }
    ];

    const sectionRef = useRef(null);
    const countersRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        countersRef.current.forEach((counter, index) => {
                            const target = stats[index].value;
                            let start = 0;
                            const duration = 2000; // Animation duration in ms
                            const stepTime = Math.abs(Math.floor(duration / target));
                            const isFloat = target % 1 !== 0;

                            const timer = setInterval(() => {
                                start += isFloat ? 0.1 : 1;
                                if (start >= target) {
                                    counter.textContent = isFloat ? target.toFixed(1) : target;
                                    clearInterval(timer);
                                } else {
                                    counter.textContent = isFloat ? start.toFixed(1) : Math.floor(start);
                                }
                            }, stepTime);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="work-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <DividerWithIcon />
            <Container>
                <Row
                    className="justify-content-center text-center mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <Col xs={12}>
                        <h2 className="fw-bold" style={{ color: '#333' }}>WHAT WE'VE DONE</h2>
                        <div
                            className="mx-auto mt-3"
                            style={{
                                width: '80px',
                                height: '4px',
                                backgroundColor: '#ff5733'
                            }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    {stats.map((stat, index) => (
                        <Col
                            key={stat.id}
                            xs={12}
                            sm={6}
                            lg={3}
                            className="text-center mb-4 mb-lg-0"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div
                                className="bg-white p-4 h-100 shadow-sm"
                                style={{
                                    borderRadius: '8px',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <h2
                                    className="display-4 fw-bold mb-3"
                                    style={{ color: '#ff5733' }}
                                    ref={el => countersRef.current[index] = el}
                                >
                                    0{stat.suffix}
                                </h2>
                                <p
                                    className="mb-0"
                                    style={{ color: '#666', fontSize: '1.1rem' }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style jsx>{`
                .shadow-sm:hover {
                    transform: translateY(-5px);
                }
            `}</style>
        </section>
    );
};

export default Work;