
import React, { useContext } from "react";
import { Container, Row, Col, Card, Button, Table } from "reactstrap";
import { FaTrashAlt, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../context/data/MyContext";

const DashBoard = () => {
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const { getAllBlog, deleteBlogs } = context;

  console.log(getAllBlog);

  const logout = () => {
    localStorage.clear("admin");
    navigate("/");
  };

  return (
    <Container className="p-4">
      {/* Profile Section */}
      <Row className="justify-content-center mb-4">
        <Col md="8">
          {" "}
          {/* Adjust the width of the column as needed */}
          <Card body className="d-flex flex-row align-items-center">
            {/* Div 1: Profile Image */}
            <div style={{ flex: "1", textAlign: "center" }}>
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="rounded-circle"
                style={{ width: "100px", height: "100px" }}
              />
            </div>

            {/* Div 2: Profile Details */}
            <div style={{ flex: "2", marginLeft: "10px", textAlign: "left" }}>
              <h5>Nitin Lokhande</h5>
              <p>Administrator</p>
              <p>nitinlokhande1995@gmail.com</p>
              <p>Total Blogs: 9</p>
              <Link to="/createblog">
                <Button color="primary" className="mt-2 mb-2">
                  <FaPlus /> Create Blog
                </Button>
              </Link>
              <Button color="danger" className="ms-2" onClick={logout}>
                <FaSignOutAlt /> Logout
              </Button>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Manage Blogs Table */}
      <Row>
        <Col>
          <Card body>
            <Table responsive striped className="mt-3">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              {getAllBlog.length > 0 ? (
                getAllBlog.map((item, index) => {
                  const { image, createdAt, title, category, id } = item;
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={image}
                            alt="thumbnail"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td>{title}</td>
                        <td>{category}</td>
                        <td>
                          {new Date(
                            createdAt.seconds * 1000
                          ).toLocaleDateString()}
                        </td>
                        <td>
                          <Button color="danger" size="sm" onClick={()=> deleteBlogs(id)}>
                            <FaTrashAlt /> Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              ) : (
                <h5>No Blogs Found</h5>
              )}
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
