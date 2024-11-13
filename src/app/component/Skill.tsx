import React from 'react';
import Image from 'next/image';
import './Skill.css';

const Skill = () => {
  return (
    <div className="skill-container">
      {/* Skill Section */}
      <section id="Skill">
        <h1 className="skill-title">Skill</h1>

        {/* Flex container for image and skills */}
        <div className="skill-content">
          {/* Profile Image Section */}
          <div className="profile-image">
            <Image 
              src="/images/hira.png" 
              alt="Hira Naz"
              width={50}
              height={70}
              className="profile-pic"
            />
          </div>

          {/* Skills Section */}
          <div className="skills">
            <p className="skills-heading">Skills</p>

            {/* Skill Bars */}
            <div className="skill-bar">
              <span className="skill-name">HTML</span> <span className="skill-percentage">95%</span>
              <div className="progress-bar">
                <div className="progress html" />
              </div>
            </div>

            <div className="skill-bar">
              <span className="skill-name">CSS</span> <span className="skill-percentage">95%</span>
              <div className="progress-bar">
                <div className="progress css" />
              </div>
            </div>

            <div className="skill-bar">
              <span className="skill-name">JavaScript</span> <span className="skill-percentage">85%</span>
              <div className="progress-bar">
                <div className="progress javascript" />
              </div>
            </div>

            <div className="skill-bar">
              <span className="skill-name">TypeScript</span> <span className="skill-percentage">90%</span>
              <div className="progress-bar">
                <div className="progress typescript" />
              </div>
            </div>

            <div className="skill-bar">
              <span className="skill-name">Tailwind CSS</span> <span className="skill-percentage">80%</span>
              <div className="progress-bar">
                <div className="progress tailwind" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
