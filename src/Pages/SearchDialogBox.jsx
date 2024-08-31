
// import React, { useContext, useState } from 'react';
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Input
// } from 'reactstrap';
// import MyContext from '../context/data/MyContext';
// import { useNavigate } from 'react-router-dom';

// const SearchDialogBox = ({ isOpen, toggle }) => {

//   const context = useContext(MyContext);
//   const {searchKey, setSearchKey, getAllBlog} = context;

//   const navigate = useNavigate();


//   const handleSearchSubmit = () => {
    
//     // Add your search logic here
//     toggle(); // Close the modal after search
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Search</ModalHeader>
//       <ModalBody>
//         <Input
//           type="text"
//           placeholder="Search..."
//           value={searchKey}
//           onChange={(e) => setSearchKey(e.target.value)}
//         />
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={handleSearchSubmit}>Search</Button>
//         <Button color="secondary" onClick={toggle}>Cancel</Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default SearchDialogBox;


import React, { useContext, useState, useEffect } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import MyContext from '../context/data/MyContext';
import { useNavigate } from 'react-router-dom';

const SearchDialogBox = ({ isOpen, toggle }) => {
  const context = useContext(MyContext);
  const { searchKey, setSearchKey, getAllBlog } = context;
  const navigate = useNavigate();
  
  // State to manage the filtered search results
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchSubmit = () => {
    const results = getAllBlog.filter(blog =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredResults(results);
    setSearchKey(''); // Clear the search input
  };

  const handleBlogClick = (id) => {
    toggle(); // Close the modal
    navigate(`/bloginfo/${id}`); // Navigate to the blog details page
  };

  // Clear search results when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      setFilteredResults([]); // Clear the results when modal is closed
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Search</ModalHeader>
      <ModalBody>
        <Input
          type="text"
          placeholder="Search..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {filteredResults.length > 0 && (
          <ListGroup className="mt-3">
            {filteredResults.map((blog) => (
              <ListGroupItem
                key={blog.id}
                onClick={() => handleBlogClick(blog.id)}
                style={{ cursor: 'pointer' }}  // Apply cursor pointer
              >
                {blog.title}
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSearchSubmit}>Search</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SearchDialogBox;

