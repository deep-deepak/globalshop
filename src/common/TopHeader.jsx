import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import BlinkingText from './BlinkingText';
import Image from 'next/image';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-2 border-bottom">
      <Container fluid>
        <Row className="w-100 align-items-center">
          {/* Logo Section - Always visible */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <Link href="/">
              <Image
                src="/logo.png" // Path to your image
                alt="Example Image"
                width={180} // Desired width
                height={120} // Desired height
                priority // Ensures image loads early
              />
              {/* <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div style={{ position: 'relative' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#f0f0f0',
                    position: 'absolute',
                    left: '5px',
                    top: '5px',
                    zIndex: 1
                  }}></div>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#627f83',
                    position: 'relative',
                    zIndex: 2
                  }}></div>
                </div>
                <div style={{ 
                  marginLeft: '10px', 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}>
                  <span style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: '#627f83', 
                    lineHeight: '1' 
                  }}>HT</span>
                  <span style={{ 
                    fontSize: '1.2rem', 
                    color: '#ff6c22', 
                    fontWeight: 'bold', 
                    lineHeight: '1' 
                  }}>ADV</span>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: '#627f83', 
                    textTransform: 'uppercase' 
                  }}>CONTRACTORS</span>
                </div>
              </div> */}
            </Link>
          </Col>

          {/* Price Quote Section - Hidden on mobile */}
          <Col xs={0} md={4} className="d-none d-md-block text-center">
            <div className="d-flex justify-content-center align-items-center">
              <div style={{
                backgroundColor: '#ff6c22',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem'
              }}>
                £
              </div>
              <div className="ms-3 text-start">
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  WANT AN APPROXIMATE PRICE?
                </div>
                <div style={{
                  color: '#aaa',
                  fontSize: '0.9rem'
                }}>
                  <BlinkingText text="GET A FREE QUOTE »" className=" " />
                </div>
              </div>
            </div>
          </Col>

          {/* Call Us Section - Hidden on mobile */}
          <Col xs={0} md={4} className="d-none d-md-block text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              <div style={{
                backgroundColor: '#ff6c22',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                <FaPhone />
              </div>
              <div className="ms-3 text-start">
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  CALL US NOW
                </div>
                <div style={{
                  color: '#666',
                  fontSize: '0.9rem'
                }}>

                  <BlinkingText text="+44 7735559454" className=" " />
                </div>


              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default TopHeader;