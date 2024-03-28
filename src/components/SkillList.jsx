import React from 'react';

const SkillList = ({ title, skills, fontStyles }) => {
  return (
    <div className="col-lg-3 col-sm-6 g-4 px-2">
      <h5 style={fontStyles}>{title}:</h5>
      <ul style={fontStyles.li}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;