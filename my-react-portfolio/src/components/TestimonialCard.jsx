import React from "react";

function TestimonialCard({ quote, author }) {
  return (
    <div className="card">
      <p>"{quote}"</p>
      <strong>- {author} </strong>
    </div>
  );
}

export default TestimonialCard;
// This is a simple testimonial card component for a portfolio website.