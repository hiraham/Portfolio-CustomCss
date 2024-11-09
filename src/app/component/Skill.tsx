import React from 'react';

const Skill = () => {
  return (
    <div className="container mx-auto py-8 mt-20">
      {/* About Section */}
      <section id="Skill">
        <h1 className="text-5xl font-bold text-primary text-center mb-8">Skill</h1>

        {/* Flex container for image and skills */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src={"./Images/hira.png"} // Update the path as needed
              alt="Hira Naz"
              className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
            />
          </div>

          {/* Skills Section */}
          <div className="md:w-2/3 w-full">
            <div className="skill-mf">
              <p className="font-bold text-xl mb-4">Skills</p>

              {/* Skill Bars */}
              <div className="mb-4">
                <span>HTML</span> <span className="float-right">95%</span>
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="mb-4">
                <span>CSS</span> <span className="float-right">95%</span>
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="mb-4">
                <span>JavaScript</span> <span className="float-right">85%</span>
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="mb-4">
                <span>TypeScript</span> <span className="float-right">90%</span>
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded" style={{ width: '90%' }} />
                </div>
              </div>

              <div className="mb-4">
                <span>Tailwind CSS</span> <span className="float-right">80%</span>
                <div className="bg-gray-300 rounded h-2">
                  <div className="bg-primary h-2 rounded" style={{ width: '80%' }} />
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
