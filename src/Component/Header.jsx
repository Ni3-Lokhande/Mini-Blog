

import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import { FaShareAlt, FaUserCircle } from 'react-icons/fa';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';
import ShareDialogBox from '../Pages/ShareDialogBox';
import SearchDialogBox from '../Pages/SearchDialogBox';


function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleShareModal = () => setShareModalOpen(!shareModalOpen);
  const toggleSearchModal = () => setSearchModalOpen(!searchModalOpen);

  const admin = localStorage.getItem('admin');

  return (
    <div>
      <Navbar {...args} color='dark' dark expand='md' fixed='top' >
        <NavbarBrand tag={ReactLink} to="/">Nitin</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/allblogs">Blogs</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="d-flex align-items-center">

          <NavLink tag={ReactLink} to="/login" style={{ marginRight: '15px' }}>Admin Login</NavLink>

            <Button color="info" onClick={toggleSearchModal} style={{ marginRight: '15px' }}>
              Search
            </Button>

            <FaShareAlt style={{ cursor: 'pointer',marginRight: '15px' }} title="Share" onClick={toggleShareModal} />
          
           {admin
           ?  <NavLink
           tag={ReactLink}
           to="/dashboard"
           style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             width: '40px',
             height: '40px',
             backgroundColor: '#007bff', // Change to your preferred color
             borderRadius: '50%',
             color: '#fff',
             fontSize: '20px',
             textDecoration: 'none',
           }}
           title="Admin Dashboard"
         >
           <FaUserCircle />
         </NavLink>
         :""}
           
          </NavbarText>
        </Collapse>
      </Navbar>

      
      {/* Search Dialog Box */}
      <SearchDialogBox isOpen={searchModalOpen} toggle={toggleSearchModal}/>

      {/* Share Dialog Box */}
      <ShareDialogBox isOpen={shareModalOpen} toggle={toggleShareModal}/>

    </div>
  );
}

export default Header;





