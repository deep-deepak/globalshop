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
    const timersRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        countersRef.current.forEach((counter, index) => {
                            const target = stats[index].value;
                            let start = 0;
                            const duration = 5000; // Exactly 5 seconds for all counters
                            const isFloat = target % 1 !== 0;

                            // Calculate step size to ensure smooth animation
                            const frameRate = 30; // 30 updates per second
                            const totalFrames = duration / (1000 / frameRate);
                            const increment = target / totalFrames;

                            const startTime = Date.now();

                            const timer = setInterval(() => {
                                const elapsedTime = Date.now() - startTime;

                                // If we've reached 5 seconds, show the final value and stop
                                if (elapsedTime >= duration) {
                                    counter.textContent = isFloat ? target.toFixed(1) + stats[index].suffix : target + stats[index].suffix;
                                    clearInterval(timer);
                                    return;
                                }

                                // Otherwise continue incrementing
                                // Calculate current value based on percentage of time elapsed
                                const progress = elapsedTime / duration;
                                const currentValue = progress * target;

                                counter.textContent = isFloat ?
                                    currentValue.toFixed(1) + stats[index].suffix :
                                    Math.floor(currentValue) + stats[index].suffix;
                            }, 1000 / frameRate);

                            // Store timer reference for cleanup
                            timersRef.current[index] = timer;
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
            // Clean up observer
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }

            // Clear all timers
            timersRef.current.forEach(timer => clearInterval(timer));
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