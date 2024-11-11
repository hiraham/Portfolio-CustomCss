import React from 'react';
import Image from 'next/image';
const Skill = () => {
  return (
    <div className="container mx-auto py-8 mt-20">
      {/* Skill Section */}
      <section id="Skill">
        <h1 className="text-5xl font-bold text-white text-center mb-8">Skill</h1> {/* Changed to white */}

        {/* Flex container for image and skills */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <Image src="/images/hira.png" 
              alt="Hira Naz"
              width={50}
              height={70}
              className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
            />
          </div>

          {/* Skills Section */}
          <div className="md:w-2/3 w-full">
            <div className="skill-mf">
              <p className="font-bold text-xl text-white mb-4">Skills</p> {/* Changed to white */}

              {/* Skill Bars */}
              <div className="mb-4">
                <span className="text-white">HTML</span> <span className="float-right text-white">95%</span> {/* Changed to white */}
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded w-[95%]" />
                </div>
              </div>

              <div className="mb-4">
                <span className="text-white">CSS</span> <span className="float-right text-white">95%</span> {/* Changed to white */}
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded w-[95%]" />
                </div>
              </div>

              <div className="mb-4">
                <span className="text-white">JavaScript</span> <span className="float-right text-white">85%</span> {/* Changed to white */}
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded w-[85%]" />
                </div>
              </div>

              <div className="mb-4">
                <span className="text-white">TypeScript</span> <span className="float-right text-white">90%</span> {/* Changed to white */}
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded w-[90%]" />
                </div>
              </div>

              <div className="mb-4">
                <span className="text-white">Tailwind CSS</span> <span className="float-right text-white">80%</span> {/* Changed to white */}
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded w-[80%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
