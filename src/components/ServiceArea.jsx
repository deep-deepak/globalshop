import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const serviceCities = [
    "Hitchin",
    "Ickleford",
    "Pirton",
    "Letchworth",
    "Baldock",
    "Stotfold",
    "Arlesey",
    "Shefford",
    "Stevenage",
    "Welwyn Garden City",
    "Luton",
    "Harpenden",
    "Royston",
    "Cambridge",
    "Saffron Walden",
    "Milton Keynes",
    "Bedford",
    "Eaton Socon",
    "Huntingdon",
    "St Albans",

];

export default function ServiceArea() {
    return (
        <div>
            <Container className="">
                <Row className="mb-4">
                    <Col className="text-center">
                        <div className="map-header" style={{ background: "#FF6C22", padding: "15px 0", textAlign: "center" }}>
                            <h4 className="m-0 text-white">We Provide Service In These Areas</h4>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {serviceCities.map((city, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <Card.Title
                                        className="text-center mb-0"
                                        style={{ color: "#ff6c22" }}
                                    >
                                        {city}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
