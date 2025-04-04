import Link from "next/link";
import { blogPosts } from "../../data/blogData";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "@/layout/Layout";

export default function Home() {


    return (
        <Layout>
            <Container className="mt-4" style={{ paddingTop: "150px" }}>
                <h1 className="text-center mb-4" style={{ color: "#ff6c22" }}>Blog Posts</h1>
                <Row>
                    {blogPosts.map((post, index) => (
                        <Col md={6} lg={4} key={post.id} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                            <Card style={{ border: "1px solid #eeeeee", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.05)" }}>
                                <div style={{ position: "relative" }}>
                                    <Card.Img variant="top" src={post.image} alt={post.title} style={{ height: "300px", objectFit: "cover" }} />
                                    <div style={{ position: "absolute", top: "10px", right: "10px", background: "#ff6c22", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem" }}>
                                        {post.date}
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title style={{ height: "72px", color: "#333333" }}>{post.title}</Card.Title>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <Link href={`/blog/${post.slug}`} passHref>
                                            <Button
                                                className="px-4 py-2 rounded-pill"
                                                style={{
                                                    borderColor: '#ff6c22',
                                                    color: '#ffffff',
                                                    transition: 'all 0.3s ease',
                                                    background: "#ff6c22"
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
                                            >
                                                Read More
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
}