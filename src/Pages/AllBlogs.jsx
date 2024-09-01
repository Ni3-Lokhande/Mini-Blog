

import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./AllBlogs.css";
import MyContext from "../context/data/MyContext";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const context = useContext(MyContext);
  const { getAllBlog } = context;
  const navigate = useNavigate();


  // const cleanContent = (htmlContent) => {
  //   return htmlContent.replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags
  // };


  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">All Blogs</h1>
      <Row>
        {getAllBlog.length > 0 ? (
          getAllBlog.map((item, index) => {
            const { image, createdAt, id, title } = item;
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
                    style={{ height: "200px", objectFit: "cover" }} // Ensures consistent image display
                  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      {/* {cleanContent(content)} */}
                    </Card.Text>
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
          <h3>Blog Not Found...</h3>
        )}
      </Row>
    </div>
  );
};

export default AllBlogs;
