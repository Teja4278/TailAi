import React from "react";
import { Accordion } from "react-bootstrap";

const faqItems = [
  "How quickly can I expect to see improvements?",
  "How does the AI improve worker safety in the factory?",
  "Can I use this to create and sell a product?",
  "Can this solution help us meet sustainability goals",
  "Do I need to know about how to code?",
  "Can I use it for commercial projects?",
  "Can I use this to create and sell a product?",
];

const Faqsection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-start">
        {/* Left Column: Heading */}
        <div className="col-md-5 mb-4">
          <h2 className="fw-bold">Frequently asked questions</h2>
          <p className="text-muted">
            We are here to shape the future of AI, creating digital experiences that inform, engage,
            and inspire a global audience.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="col-md-7">
          <Accordion flush alwaysOpen>
            {faqItems.map((question, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body>
                  This is a placeholder answer. You can customize this content based on the actual
                  response to each question.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqsection;
