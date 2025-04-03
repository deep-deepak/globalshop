import { useRouter } from 'next/router';
import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';

const FAQContactSection = () => {
    const router = useRouter()
    const faqItems = [
        {
            id: 1,
            question: "What is the cost of roller shutters in the UK?",
            answer: "The price of roller shutters in the UK depends on factors such as size, material, and custom features. Contact us for a personalized quote that suits your requirements."
        },
        {
            id: 2,
            question: "Are roller shutters effective for security?",
            answer: "Absolutely! Roller shutters provide excellent protection for homes and businesses by acting as a strong barrier against intrusions and vandalism."
        },
        {
            id: 3,
            question: "When should I get my roller shutters repaired?",
            answer: "If your roller shutters are sticking, making unusual noises, or have sustained damage, it's time for a repair. Regular servicing helps maintain their efficiency and extend their lifespan."
        }
    ];

    return (
        <Container className="py-5">
            <Row>
                {/* FAQ Section */}
                <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
                    <h3 className="text-center text-lg-start mb-4" style={{ color: '#ff5733' }}>FAQs</h3>
                    <Accordion data-aos="fade-up">
                        {faqItems.map((item) => (
                            <Accordion.Item key={item.id} eventKey={item.id.toString()} className="mb-2 border" data-aos="fade-up">
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>{item.answer}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>

                {/* Contact Section */}
                <Col lg={6} data-aos="fade-left">
                    <h3 className="text-center text-lg-start mb-4" style={{ color: '#ff5733' }}>GET IN TOUCH</h3>
                    <div className="text-center mb-4" data-aos="zoom-in">
                        <div className="d-inline-flex justify-content-center align-items-center rounded-circle"
                            style={{ width: 80, height: 80, border: '2px solid #ff5733' }}>
                            <FaPhone size={32} color="#ff5733" />
                        </div>
                    </div>
                    <p className="text-center" data-aos="fade-up">
                        Ensure the safety of your property with expert roller shutter solutions. <span style={{ color: '#ff5733' }} onClick={() => router.push("/contact")}>Contact us</span> today for high-quality <strong>roller shutter services across the UK</strong>.
                        At <strong>Global Shopfronts</strong>, we are committed to delivering secure, reliable, and visually appealing solutions tailored to your needs.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQContactSection;
