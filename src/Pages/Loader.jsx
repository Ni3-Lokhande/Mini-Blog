
import React from 'react';
import { Spinner } from 'reactstrap';


const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner style={{ width: '3rem', height: '3rem' }} color="primary" />
      <span className="ms-3">Loading...</span>
    </div>
  );
};

export default Loader;
