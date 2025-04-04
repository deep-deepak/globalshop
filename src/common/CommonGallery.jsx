import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import ButtonLink from './ButtonLink';
import { useRouter } from 'next/router';


const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter()

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/images/gall.avif",
      alt: "Roller shutter installation in parking garage"
    },
    {
      id: 2,
      src: "/images/gall1.jpg",
      alt: "Technician repairing roller shutter"
    },
    {
      id: 3,
      src: "/images/gall2.jpg",
      alt: "Industrial roller shutter installation"
    },
    {
      id: 4,
      src: "/images/gall3.jpg",
      alt: "Roller shutter maintenance"
    },
    {
      id: 5,
      src: "/images/gall4.jpg",
      alt: "Close-up of roller shutter mechanism"
    },
    {
      id: 6,
      src: "/images/gall5.jpg",
      alt: "Roller shutter remote control system"
    },
    {
      id: 7,
      src: "/images/gall6.jpg",
      alt: "Commercial building roller shutter installation"
    },
    {
      id: 8,
      src: "/images/gall8.jpg",
      alt: "Technician upgrading roller shutter motor"
    }

  ];

  // Open modal with selected image
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setShowModal(true);
  };

  // Navigate to next image
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const isGalleryPage = router.pathname === '/gallery';
  // Navigate to previous image
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Container className="py-5">
      {!isGalleryPage && (
        <h2 className="text-center mb-4" style={{ fontWeight: '600' }}>
          GALLERY
        </h2>
      )}

      {/* Gallery Grid */}
      <Row className="g-4">
        {galleryImages.map((image, index) => (
          <Col key={image.id} xs={12} sm={6} lg={3}>
            <div
              className="gallery-item"
              onClick={() => handleImageClick(image, index)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid w-100"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </Col>
        ))}
      </Row>
      {!isGalleryPage && (
        <div className="d-flex justify-content-center">
          <Button
            className="mt-3 px-4 py-2 rounded-pill"
            style={{
              borderColor: '#ff6c22',
              color: '#ffffff',
              transition: 'all 0.3s ease',
              background: "#ff6c22",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ffffff";
              e.target.style.color = "#ff6c22";
              e.target.style.borderColor = "#ff6c22";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#ff6c22";
              e.target.style.color = "#ffffff";
              e.target.style.borderColor = "#ff6c22";
            }}
            data-aos="fade-up"
            data-aos-delay={600}
            onClick={() => router.push('/gallery')}
          >
            Explore More
          </Button>
        </div>
      )}



      {/* Lightbox Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
        className="gallery-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedImage?.alt}
            <span className="ms-2 text-muted small">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 position-relative">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="img-fluid w-100"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
          )}

          {/* Navigation arrows */}
          <div className="position-absolute top-50 start-0 translate-middle-y">
            <button
              className="btn btn-dark rounded-circle p-2 m-2"
              onClick={handlePrevious}
              style={{ opacity: 0.7 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y">
            <button
              className="btn btn-dark rounded-circle p-2 m-2"
              onClick={handleNext}
              style={{ opacity: 0.7 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div>
            {/* Thumbnails for navigation */}
            <div className="d-flex gap-2">
              {galleryImages.map((img, idx) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={`Thumbnail ${idx + 1}`}
                  style={{
                    width: '60px',
                    height: '40px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    opacity: idx === currentIndex ? 1 : 0.6,
                    border: idx === currentIndex ? '2px solid #0d6efd' : 'none'
                  }}
                  onClick={() => {
                    setSelectedImage(img);
                    setCurrentIndex(idx);
                  }}
                />
              ))}
            </div>
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Gallery;