import React from "react";
import tale5 from "../assets/tale5.svg"; // Adjust path if needed
// import "./ProcessSection.css";
// optional, for custom styles

const Banner = () => {
  return (
    <section className="py-5 bg-light text-dark text-center">
      <h2 className="fw-bold mb-2">See our process</h2>
      <p className="text-muted mb-5">
        From Idea to Implementation, Our Step-by-Step Approach to AI-Powered Solutions
      </p>

      <div className="d-flex justify-content-center mb-4 flex-wrap">
        {["Discovery & Consultation", "Solution Design & Development", "Integration & Deployment", "Ongoing Monitoring & Optimization"]
          .reverse()
          .map((step, i) => (
            <div
              key={i}
              className="px-2 py-3 text-white fw-semibold"
              style={{
                backgroundColor: `hsl(${220 + i * 10}, 20%, ${80 - i * 10}%)`,
                minWidth: "180px",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {step}
            </div>
          ))}
      </div>

      <div className="container">
        <div className="row align-items-center bg-dark text-white rounded p-4">
          <div className="col-md-6 mb-3 mb-md-0 text-center">
            <img
              src={tale5}
              alt="Process Illustration"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
          </div>
          <div className="col-md-6 text-start">
            <h4 className="fw-bold">Understanding Your Unique Operational Challenges</h4>
            <p>
              We begin with a thorough analysis of your current workflows, equipment, and production goals. By identifying key areas for improvement and potential pain points, we set a solid foundation for creating a solution tailored to your specific needs.
            </p>
            <p>Assessing existing processes, pain points, and opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
