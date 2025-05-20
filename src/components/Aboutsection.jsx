import React from 'react';
import tale6 from '../assets/tale6.webp';

const Aboutsection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center shadow rounded-4 overflow-hidden">
        {/* Left: Image */}
        <div className="col-md-6 p-0">
          <img
            src={tale6}
            alt="Team Meeting"
            className="img-fluid w-100 h-100 object-fit-cover"
            style={{ height: '100%' }}
          />
        </div>

        {/* Right: Content */}
        <div className="col-md-6 bg-white p-5">
          <h2 className="fw-bold">We know<br />your industry.<br />Get to know us.</h2>
          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-dark rounded-pill px-4">About Us</button>
            <button className="btn btn-outline-dark rounded-pill px-4">Open Positions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
