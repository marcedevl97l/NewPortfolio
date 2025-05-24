// js/react-experience.js

function ExperienceCard(props) {
  return <div className="card">{props.title}</div>;
}

function ExperienceSection() {
  const experiences = [
    "Mod at Dewa-Dewi Tech (2015–2017)",
    "UI/UX Designer at Odama Studio (2017–2019)",
    "UX Researcher at Korsa Studio (2018–2021)",
    "Product Designer at Apple Inc (2021–Now)",
  ];

  return (
    <>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} title={exp} />
      ))}
    </>
  );
}

const experienceContainer = document.querySelector(
  "#react-experience-container"
);
if (experienceContainer) {
  const root = ReactDOM.createRoot(experienceContainer);
  root.render(<ExperienceSection />);
}
// ReactDOM.render(<ExperienceSection />, experienceContainer);