import React from 'react';


const Contactsection = () => {
  return (
    <div className="contact-section container my-5 p-4 rounded-4 shadow-sm bg-white">
      <div className="row align-items-center">
        {/* Left Text Block */}
        <div className="col-md-6 mb-4 mb-md-0">
          <p className="text-muted fs-5 mb-2">Are you looking to help you Transform your Organization?</p>
          <h2 className="fw-bold display-6">Our experts are<br />here for you.</h2>
        </div>

        {/* Right Contact Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-4">
              <label className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control border-0 border-bottom rounded-0" />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Company</label>
              <input type="text" className="form-control border-0 border-bottom rounded-0" />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control border-0 border-bottom rounded-0" />
            </div>
            <button type="submit" className="btn btn-dark rounded-pill px-4 py-2">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactsection;
