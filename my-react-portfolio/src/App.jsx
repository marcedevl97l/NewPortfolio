// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ExperienceCard from "./components/ExperienceCard";
import PortfolioProject from "./components/PortfolioProject";
import TestimonialCard from "./components/TestimonialCard";


import perfilImage from "./assets/images/perfil.jfif";

import "./App.css";

function App() {
  const services = [
    "Social Ads",
    "Search Engineer",
    "Content Marketing",
    "SaaS Marketing",
  ];
  const experiences = [
    "Graphic Designer at Dewa-Dewi Tech (2015–2017)",
    "UI/UX Designer at Odama Studio (2017–2019)",
    "UX Researcher at Korsa Studio (2018–2021)",
    "Product Designer at Apple Inc (2021–Now)",
  ];
  const projects = [
    // Si usas imágenes locales de src/assets/images:
    // { src: project1Image, alt: "Project 1", title: "Diseño Web para Startup", description: "..." },
    {
      src: "https://via.placeholder.com/300/CCCCCC/FFFFFF?text=Project+1",
      alt: "Project 1",
      title: "Diseño Web para Startup",
      description:
        "Un proyecto enfocado en la creación de una interfaz de usuario atractiva y funcional para una nueva startup de tecnología.",
    },
    {
      src: "https://via.placeholder.com/300/AAAAAA/FFFFFF?text=Project+2",
      alt: "Project 2",
      title: "Aplicación Móvil de Recetas",
      description:
        "Desarrollo de una aplicación móvil para iOS y Android, permitiendo a los usuarios descubrir y guardar recetas personalizadas.",
    },
    {
      src: "https://via.placeholder.com/300/BBBBBB/FFFFFF?text=Project+3",
      alt: "Project 3",
      title: "Dashboard de Analíticas",
      description:
        "Implementación de un dashboard interactivo para visualizar datos de marketing, mejorando la toma de decisiones estratégicas.",
    },
  ];
  const testimonialData = {
    quote:
      "Without Journey Commerce, we would never have been able to implement this system ourselves...",
    author: "Dhimmo Reijnder, Founder",
  };

  return (
    <>
      <Header />

      <main>
        <section className="hero" id="home">
          <div>
            <div className="title">
            FullStack
              <br />
            Developer
            </div>
            <p>
              Hi, I’m Duwy. A UI/UX Designer crafting intuitive digital
              experiences.
            </p>
          </div>
          <img
            src={perfilImage}
            className="profile-img"
            alt="Duwy profile image"
          />
        </section>

        <section className="section" id="about">
          <h2>About Me</h2>
          <p>Design has always been more than just a job – it's my passion.</p>
        </section>

        <section className="section services" id="services">
          <h2>Services</h2>
          <div className="card-grid">
            {" "}
            {/* Un div para la grilla de tarjetas, si lo necesitas */}
            {services.map((service, index) => (
              <ServiceCard key={index} name={service} />
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <h2>Experience</h2>
          <div className="card-grid">
            {" "}
            {/* Un div para la grilla de tarjetas */}
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} title={exp} />
            ))}
          </div>
        </section>

        <section className="section portfolio" id="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            {" "}
            {/* Un div para la grilla de proyectos */}
            {projects.map((project, index) => (
              <PortfolioProject
                key={index}
                src={project.src}
                alt={project.alt}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </section>

        <section className="section testimonial" id="testimonial">
          <h2>Testimonial</h2>
          <TestimonialCard
            quote={testimonialData.quote}
            author={testimonialData.author}
          />
        </section>

        <section className="section" id="contact">
          <h2>Let's Connect</h2>
          <button className="button">Hire Me Now</button>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
