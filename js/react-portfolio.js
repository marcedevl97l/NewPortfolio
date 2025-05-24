// js/react-portfolio.js

function PortfolioProject(props) {
  return <img src={props.src} alt={props.alt} />;
}

function PortfolioSection() {
  const projects = [
    {
      src: "https://via.placeholder.com/300/CCCCCC/FFFFFF?text=Project+1",
      alt: "Project 1",
    },
    {
      src: "https://via.placeholder.com/300/AAAAAA/FFFFFF?text=Project+2",
      alt: "Project 2",
    },
    {
      src: "https://via.placeholder.com/300/BBBBBB/FFFFFF?text=Project+3",
      alt: "Project 3",
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <PortfolioProject key={index} src={project.src} alt={project.alt} />
      ))}
    </>
  );
}

const portfolioContainer = document.querySelector("#react-portfolio-container");
if (portfolioContainer) {
  const root = ReactDOM.createRoot(portfolioContainer);
  root.render(<PortfolioSection />);
}
// ReactDOM.render(<PortfolioSection />, portfolioContainer);
