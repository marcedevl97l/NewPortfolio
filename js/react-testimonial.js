// js/react-testimonials.js

function TestimonialCard(props) {
  return (
    <div className="card">
      <p>“{props.quote}”</p>
      <strong>– {props.author}</strong>
    </div>
  );
}

function TestimonialSection() {
  const testimonialData = {
    quote:
      "Without Journey Commerce, we would never have been able to implement this system ourselves...",
    author: "Dhimmo Reijnder, Founder",
  };

  return (
    <TestimonialCard
      quote={testimonialData.quote}
      author={testimonialData.author}
    />
  );
}

const testimonialContainer = document.querySelector(
  "#react-testimonial-container"
);
if (testimonialContainer) {
  const root = ReactDOM.createRoot(testimonialContainer);
  root.render(<TestimonialSection />);
}
