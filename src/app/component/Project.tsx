import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className='mt-20'>
      <section id="projects">
        <h1 className="text-6xl font-bold text-center text-primary mb-8">Projects Section</h1>

        {/* Projects Counter Section */}
        <div className="counter-wrap ftco-animate d-flex mt-md-3 text-white mt-10 mx-4 sm:mx-10 md:mx-20">
          <div className="text">
            <p className="mb-2 text-xl">
              <span className="number text-4xl font-bold" data-number="10">10</span> <span>+</span>
              <span>&nbsp; Projects completed</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Apply fixed width and height for all images */}
              <img src="images/a.png" alt="Ecommerce website" className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <img src="images/b.png" alt="Ecommerce website" className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <img src="images/d.png" alt="Ecommerce website" className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <img src="images/xc.png" alt="Ecommerce website" className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <img src="images/za.png" alt="Portfolio" className="rounded-lg shadow-lg w-full h-60 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <div className="text-center pb-5  ">
        <div className="heading-section ftco-animate gap-4">
          <button className="mt-4 px-6 py-3 bg-primary text-white rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
            <Link href="https://www.linkedin.com/in/hira-hammad-6847592b5/" className="text-white">LinkedIn</Link>
          </button>
          
          <button className="mt-4 px-6 py-3 bg-primary text-white rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
            <Link href="https://github.com/hiraham" className="text-white">Github</Link>
          </button>
         
          <button className="mt-4 px-6 py-3 bg-primary text-white rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
            <Link href="https://twitter.com/hira_hammad" className="text-white">Twitter</Link>
          </button>
         
          
          
        </div>
      </div>

      {/* Education and Experience Section */}
      {/* <div className="my-10">
        <div className="row text-center">
          <h2 className="text-4xl text-primary font-semibold mb-4">Education</h2>
          <div className="underline mb-6"></div>
        </div>
        <div className="row text-center">
          <h2 className="text-4xl text-primary font-semibold mb-4">Experience</h2>
          <div className="underline mb-6"></div>
        </div>
      </div> */}

      {/* Experience Details */}
      {/* <div className="row">
        <div className="col-md-6 text-center text-primary">
          <div className="resume-wrap ftco-animate p-6 bg-gray-800 text-white rounded-lg shadow-xl">
            <span className="text-xl font-semibold text-green-400">2021-Present</span>
            <h2 className="text-2xl font-bold mt-2">Senior Data Analyst</h2>
            <span className="text-lg text-green-300">Merkle, A Dentsu Company</span>
            <p className="mt-4">Merkle is a global leader in data-driven customer experience management (CXM) with over 10,000 professionals worldwide.</p>
            <ul className="mt-4 space-y-2">
              <li>Analyzed ad campaigns, customer surveys, and clickstream data, identifying key trends that led to the development of new product lines.</li>
              <li>Developed time series forecasting models that predicted sales with 92% accuracy, optimizing marketing budgets.</li>
              <li>Led A/B tests and statistical analyses, resulting in a 20% MoM increase in conversion rates.</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Download CV Button */}
      {/* <div className="row justify-content-center mt-8">
        <div className="col-md-6 text-center">
          <p>
            <Link href="/Images/pdf-resume.jpeg" className="btn btn-primary py-5 px-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Download CV
            </Link>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
