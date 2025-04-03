import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const RollerShutterCTA = () => {
  return (
    <div
      className="py-3"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,20,0.9), rgba(0,0,20,0.7)), url("https://via.placeholder.com/1920x200/000060/000060")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Colorful streaks effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(45deg, transparent 0%, #4e00c2 10%, transparent 20%, #00a2ff 30%, transparent 40%, #ff00ea 60%, transparent 70%, #4e00c2 80%, transparent 90%, #00a2ff 100%)',
          opacity: 0.3,
          zIndex: 1
        }}
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={6} className="text-white text-center text-md-left mb-3 mb-md-0">
            <h2 className="m-0 font-weight-bold">FACING ANY TROUBLE REGARDING ROLLER SHUTTER ?</h2>
          </Col>
          <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-end">
            <Button
              className="me-3 px-4"
              style={{
                backgroundColor: '#ff6c22',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              <FaPhone className="me-2" /> Call Us
            </Button>
            <Button
              className="px-4"
              style={{
                backgroundColor: '#25D366',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              <FaWhatsapp className="me-2" /> WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RollerShutterCTA;