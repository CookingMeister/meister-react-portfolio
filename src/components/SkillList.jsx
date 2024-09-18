import React from 'react';

const SkillList = ({ title, skills }) => {
  return (
    <div className="col-md-6 mb-4">
      <div
        className="card text-center text-light bg-dark border-0 shadow-lg h-100"
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <div className="card-body">
          <h5 className="card-title text-info">{title}</h5>
          <ul className="list-unstyled d-flex flex-column align-items-center ms-3">
            {skills.map((skill, index) => (
              <li key={index} className="my-2 w-100 text-start">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
