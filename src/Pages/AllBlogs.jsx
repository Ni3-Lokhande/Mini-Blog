import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "./AllBlogs.css";
import MyContext from "../context/data/MyContext";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const context = useContext(MyContext);
  const { getAllBlog } = context;
  const navigate = useNavigate();


  const cleanContent = (htmlContent) => {
    return htmlContent.replace(/<\/?[^>]+(>|$)/g, ""); // Removes all HTML tags
  };


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
      <div className="d-flex justify-content-between flex-wrap">
        {getAllBlog.length > 0 ? (
          <>
            {getAllBlog.map((item, index) => {
              const {image, createdAt, id, title, content } = item;
              return (
                <Card
                  className="mb-4 shadow-sm blog-card"
                  style={{ width: "32%" }}
                  key={index}
                >
                  <Card.Img
                    variant="top"
                    src={image}
                    alt="Blog Post Image"
                    onClick={() => navigate(`/bloginfo/${id}`)}
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
              );
            })}
          </>
        ) : (
          <>
            <h3>Blog Not Found...</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
