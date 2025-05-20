import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tale3 from '../assets/tale3.svg';
import tale4 from '../assets/tale4.svg';

const AIWorkflowCards = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 bg-white h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 className="fw-bold">Revolutionize Workflows with Intelligent AI-Driven Solutions</h5>
              <p className="text-muted">
                With a focus on innovation and sustainability, our solutions are tailored to meet the evolving needs of modern production facilities.
              </p>
              <ul className="list-unstyled">
                <li>✔ Real-Time Data Insights.</li>
                <li>✔ Predictive Maintenance.</li>
                <li>✔ Eco-Friendly Optimization.</li>
              </ul>
            </div>
            <button className="btn btn-dark mt-3 align-self-start">Learn More</button>
          </div>
        </div>

        {/* Card 2 - AI Illustration */}
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 bg-white h-100 d-flex justify-content-center align-items-center">
            <img
              src={tale3}
              alt="AI Illustration"
              className="img-fluid"
              style={{ maxHeight: '350px', objectFit: 'cover', width:'100%' }}
            />
          </div>
        </div>

        {/* Card 3 - Accuracy Rate */}
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 h-100 d-flex flex-column align-items-center justify-content-center"
            style={{ backgroundColor: "#fde7f7" }}
          >
            <img
              src={tale4}
              alt="Accuracy Graph"
              className="img-fluid"
              style={{ maxHeight: '350px', objectFit: 'cover' ,width:'70%' }}
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6">
          <div className="p-4 shadow rounded-4 bg-white h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 className="fw-bold">Unmatched Accuracy for Reliable Results</h5>
              <p className="text-muted">
                Our AI-powered solutions are designed to provide industry-leading accuracy.
              </p>
              <ul className="list-unstyled">
                <li>✔ Maintain a standard of excellence.</li>
                <li>✔ High accuracy rates mean fewer mistakes.</li>
                <li>✔ Our solutions analyze vast amounts of data.</li>
              </ul>
            </div>
            <button className="btn btn-dark mt-3 align-self-start">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowCards;
