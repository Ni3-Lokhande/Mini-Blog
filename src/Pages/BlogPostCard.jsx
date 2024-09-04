import React, { useContext, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import MyContext from "../context/data/MyContext";
import { useNavigate } from "react-router-dom";

const BlogPostCard = () => {
  const context = useContext(MyContext);
  const { getAllBlog } = context;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to format the date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  // Filter blogs based on the selected category
  const filteredBlogs = selectedCategory
    ? getAllBlog.filter((blog) => blog.category === selectedCategory)
    : getAllBlog.slice(0, 3); // Show the latest 3 blogs if no category is selected

  return (
    <div className="container mt-5">
      
      {/* Category Row */}
      <Row className="mb-4">
        <Col className="text-center">
          <Button
            variant="warning"
            className="me-2"
            onClick={() => setSelectedCategory("Sport")}
          >
            Sport
          </Button>
          <Button
            variant="info"
            className="me-2"
            onClick={() => setSelectedCategory("Business")}
          >
            Business
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => setSelectedCategory("Bollywood Hangama")}
          >
            Bollywood Hangama
          </Button>
          <Button
            variant="success"
            className="me-2"
            onClick={() => setSelectedCategory("Health")}
          >
            Health
          </Button>
          <Button
            variant="info"
            className="me-2"
            onClick={() => setSelectedCategory("Science & Tech")}
          >
            Science & Tech
          </Button>
          <Button
            variant="warning"
            className="me-2"
            onClick={() => setSelectedCategory("Politics")}
          >
            Politics
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => setSelectedCategory("Gov-Schemes")}
          >
            Gov-Schemes
          </Button>
          <Button variant="danger" onClick={() => setSelectedCategory("Crime")}>
            Crime
          </Button>
        </Col>
      </Row>

      <h1 className="mb-4 text-center">Latest Blog Posts</h1>

      <Row>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item, index) => {
            const { image, createdAt, title, id } = item;
            return (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <Card
                  className="shadow-sm blog-card"
                  onClick={() => navigate(`/bloginfo/${id}`)}
                >
                  <Card.Img
                    variant="top"
                    src={image}
                    alt="Blog Post Image"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Posted on - {formatDate(createdAt)}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })
        ) : (
          <h5>No Blogs Found</h5>
        )}
      </Row>
      <div className="text-center mt-2">
        {/* <button type="button" className="btn btn-primary">See More</button> */}
      </div>
    </div>
  );
};

export default BlogPostCard;
