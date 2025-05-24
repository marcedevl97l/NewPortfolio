// js/react-services.js

function ServiceCard(props) {
  return <div className="card">{props.name}</div>;
}

function ServicesSection() {
  const services = [
    "Social Ads",
    "Search Engineer",
    "Content Marketing",
    "SaaS Marketing",
  ];

  return (
    <>
      {" "}
      {/* Fragmento de React, permite agrupar elementos sin un div extra */}
      {services.map((service, index) => (
        <ServiceCard key={index} name={service} />
      ))}
    </>
  );
}

const servicesContainer = document.querySelector("#react-services-container");
if (servicesContainer) {
  // Verificamos que el contenedor exista antes de renderizar
  const root = ReactDOM.createRoot(servicesContainer);
  root.render(<ServicesSection />);
}
// ReactDOM.render(<ServicesSection />, servicesContainer);