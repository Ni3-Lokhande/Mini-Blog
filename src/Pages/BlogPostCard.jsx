
import React, { useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import MyContext from '../context/data/MyContext';
import { useNavigate } from 'react-router-dom';

const BlogPostCard = () => {
  const context = useContext(MyContext);
  const { getAllBlog } = context;
  const navigate = useNavigate();

  // Function to remove HTML tags from content
  // const cleanContent = (htmlContent) => {
  //   return htmlContent.replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags
  // };

  // Function to format the date
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

  // Get the latest 3 blogs
  const latestBlogs = getAllBlog.slice(0, 3);

  return (
    <div className="container mt-5">
    <h1 className="mb-4 text-center">Latest Blog Posts</h1>
    <Row>
      {latestBlogs.length > 0 ? (
        latestBlogs.map((item, index) => {
          const { image, createdAt, title, id } = item;
          return (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card className="shadow-sm blog-card" onClick={() => navigate(`/bloginfo/${id}`)}>
                <Card.Img
                  variant="top"
                  src={image}
                  alt="Blog Post Image"
                  style={{ height: '200px', objectFit: 'cover' }} // Adjusted for a consistent display
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {/* {cleanContent(content)}  Display cleaned content */}
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

