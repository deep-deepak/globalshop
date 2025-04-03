import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SiShutterstock } from "react-icons/si";


const DividerWithIcon = () => {
    return (
        <Container className="my-4">
            <Row className="align-items-center">
                <Col className="p-0">
                    <hr style={{ border: '1px solid #b14c1a' }} />
                </Col>
                <Col xs="auto" className="px-2">
                    <div style={{
                        backgroundColor: '#ff6c22',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white'
                    }}>
                        <SiShutterstock size={16} />
                    </div>
                </Col>
                <Col className="p-0">
                    <hr style={{ border: '1px solid #b14c1a' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default DividerWithIcon;