import Link from 'next/link';
import Image from 'next/image';
import './Project.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <section id="projects">
        <h1 className="portfolio-title">Projects Section</h1>

        {/* Projects Counter Section */}
        <div className="counter-wrap">
          <div className="text">
            <p className="projects-count">
              <span className="number">10</span> <span>+</span>
              <span>&nbsp; Projects completed</span>
            </p>
            <div className="projects-grid">
              <Image src="/images/a.png" alt="Ecommerce website" width={500} height={300} className="project-image" />
              <Image src="/images/b.png" alt="Ecommerce website" width={500} height={300} className="project-image" />
              <Image src="/images/d.png" alt="Ecommerce website" width={500} height={300} className="project-image" />
              <Image src="/images/xc.png" alt="Ecommerce website" width={500} height={300} className="project-image" />
              <Image src="/images/za.png" alt="Portfolio" width={500} height={300} className="project-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <div className="resume-section">
        <div className="heading-section">
          <button className="resume-button">
            <Link href="https://www.linkedin.com/in/hira-hammad-6847592b5/" className="link">LinkedIn</Link>
          </button>
          
          <button className="resume-button">
            <Link href="https://github.com/hiraham" className="link">Github</Link>
          </button>
         
          <button className="resume-button">
            <Link href="https://twitter.com/hira_hammad" className="link">Twitter</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
