import Link from 'next/link';
import Image from 'next/image';

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
              <Image src="/images/a.png" alt="Ecommerce website" width={500} height={300} className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <Image src="/images/b.png" alt="Ecommerce website" width={500} height={300} className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <Image src="/images/d.png" alt="Ecommerce website" width={500} height={300} className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <Image src="/images/xc.png" alt="Ecommerce website" width={500} height={300} className="rounded-lg shadow-lg w-full h-60 object-cover" />
              <Image src="/images/za.png" alt="Portfolio" width={500} height={300} className="rounded-lg shadow-lg w-full h-60 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <div className="text-center pb-5">
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
    </div>
  );
};

export default Portfolio;

