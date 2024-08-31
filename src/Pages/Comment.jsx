import React from "react";
import { Card, Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";

const Comment = ({
  addComment,
  commentText,
  setCommentText,
  allComment,
  fullName,
  setFullName,
}) => {

  
  return (
    <div className="mt-4 d-flex justify-content-center">
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <h5 className="text-center">Comments</h5>
        <ListGroup className="mb-3">
          {allComment.length > 0 ? (
            allComment.map((item) => {
              const { fullName, commentText, date } = item;
              return (
                <ListGroupItem key={item.id} className="bg-light border-0">
                  <Card>
                    <Card.Body>
                      <Card.Text>{commentText}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                      <small className="text-muted">By {fullName}</small>
                      <small className="text-muted">{date}</small>
                    </Card.Footer>
                  </Card>
                </ListGroupItem>
              );
            })
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </ListGroup>
        <Form.Group className="mt-3">
          <Form.Control
            type="text"
            placeholder="Enter Your Name..."
            className="border-primary mb-3"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Add a comment..."
            className="border-primary"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="mt-3 w-100" onClick={addComment}>
          POST COMMENT
        </Button>
      </div>
    </div>
  );
};

export default Comment;
