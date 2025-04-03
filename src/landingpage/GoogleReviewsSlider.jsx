import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import DividerWithIcon from '@/common/DividerWithIcon';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const GoogleReviewsSlider = () => {
    const reviews = [
        {
            id: 1,
            text: "Excellent customer service and a reasonable price. The contractors were very knowledgeable and carried out the work extremely quickly. I would highly recommend.",
            author: "Kerry-Ann Wilson",
            rating: 5
        },
        {
            id: 2,
            text: "Great experience from start to finish. The team was professional and completed everything on time.",
            author: "James Peterson",
            rating: 5
        },
        {
            id: 3,
            text: "Very impressed with their attention to detail. Would use their services again.",
            author: "Michelle Taylor",
            rating: 4
        }
    ];

    const CustomPrevIcon = () => (
        <span className="carousel-control-prev-icon" aria-hidden="true">
            <div className="text-white d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                style={{ width: 40, height: 40, transition: 'all 0.3s ease', background: "#ff6c22" }}>
                <FaChevronLeft />
            </div>
        </span>
    );

    const CustomNextIcon = () => (
        <span className="carousel-control-next-icon" aria-hidden="true">
            <div className=" text-white d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                style={{ width: 40, height: 40, transition: 'all 0.3s ease', background: "#ff6c22" }}>
                <FaChevronRight />
            </div>
        </span>
    );

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<FaStar key={i} className="text-warning mx-1" />);
            } else if (i < rating && rating % 1 !== 0) {
                stars.push(<FaStarHalfAlt key={i} className="text-warning mx-1" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-warning mx-1" />);
            }
        }
        return stars;
    };

    return (
        <div className="review-section py-4" style={{ backgroundColor: '#f8f9fa' }}>
            <DividerWithIcon />
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center mb-4" data-aos="fade-up">
                        <h2 className="fw-bold" style={{ color: '#333' }}>GOOGLE REVIEWS</h2>
                        <div className="separator mx-auto my-3" style={{
                            width: '80px',
                            height: '3px',
                            backgroundColor: '#ff6347'
                        }}></div>
                    </Col>
                    <Col xs={12} md={10} lg={8}>
                        <Carousel
                            prevIcon={<CustomPrevIcon />}
                            nextIcon={<CustomNextIcon />}
                            indicators={true}
                            className="review-carousel position-relative"
                            interval={5000}
                        >
                            {reviews.map((review) => (
                                <Carousel.Item key={review.id}>
                                    <div
                                        className="d-flex flex-column align-items-center text-center p-4 bg-white rounded-lg shadow-sm"
                                        style={{
                                            minHeight: '300px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '2rem',
                                            margin: '1rem 0.5rem',
                                            borderTop: '3px solid #ff6347'
                                        }}
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <FaQuoteLeft
                                            className=" opacity-25 mb-3"
                                            style={{ color: "#ff6c22", fontSize: '2rem' }}
                                            data-aos="fade-right"
                                            data-aos-delay="300"
                                        />
                                        <p
                                            className="review-text mb-4 px-md-5"
                                            style={{
                                                fontSize: '1.1rem',
                                                fontStyle: 'italic',
                                                lineHeight: '1.6',
                                                color: '#555'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                        >
                                            {review.text}
                                        </p>
                                        <FaQuoteRight
                                            className=" opacity-25 mb-3"
                                            style={{ color: "#ff6c22", fontSize: '2rem' }}
                                            data-aos="fade-left"
                                            data-aos-delay="500"
                                        />
                                        <div
                                            className="rating mb-3 d-flex"
                                            data-aos="fade-up"
                                            data-aos-delay="600"
                                        >
                                            {renderStars(review.rating)}
                                        </div>
                                        <h5
                                            className="author-name fw-bold mb-0"
                                            style={{ color: '#333' }}
                                            data-aos="fade-up"
                                            data-aos-delay="700"
                                        >
                                            {review.author}
                                        </h5>
                                        <small
                                            className="text-muted"
                                            data-aos="fade-up"
                                            data-aos-delay="800"
                                        >
                                            Verified Customer
                                        </small>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <style jsx global>{`
                .carousel-indicators {
                    bottom: -50px;
                }
                .carousel-indicators button {
                    width: 12px !important;
                    height: 12px !important;
                    border-radius: 50% !important;
                    background-color: #ddd !important;
                    opacity: 0.5;
                }
                .carousel-indicators button.active {
                    background-color: #ff6c22 !important;
                    opacity: 1;
                }
                .carousel-control-prev, .carousel-control-next {
                    width: 10%;
                    opacity: 1;
                }
                .carousel-control-prev:hover .bg-danger, 
                .carousel-control-next:hover .bg-danger {
                    transform: scale(1.1);
                }
                @media (max-width: 768px) {
                    .carousel-control-prev, .carousel-control-next {
                        width: 15%;
                    }
                }
            `}</style>
        </div>
    );
};

export default GoogleReviewsSlider;