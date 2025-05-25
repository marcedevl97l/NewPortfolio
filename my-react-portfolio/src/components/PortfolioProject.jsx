import React, { useState } from "react";
import { motion } from "framer-motion";

function PortfolioProject({ src, alt, title, description }) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <motion.div
      className="portfolio-item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
    >
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <button onClick={toggleDetails}>
        {showDetails ? "Ocultar Detalles" : "Mostrar Detalles"}
      </button>
      {showDetails && (
        <motion.p
          className="project-description"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
export default PortfolioProject;
// This is a simple portfolio project component for a portfolio website.
