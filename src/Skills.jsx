import React from "react";
import { Avatar } from "@mui/material";

const Skills = () => {
  return (
    <React.Fragment>
      <style>
        {`
          .skillhead{
            font-size:30px;
            font-weight:500;
          }
          span{
            font-size:25px;
            font-weight:500;
          }
          p{
          font-size:20px;
          }
        `}
      </style>
      <div className="outer d-flex justify-content-between align-items-center">
        <div className="skillhead">Skills</div>
        <div className="d-flex">
          <Avatar alt="My photo" src="./images/IMG1.jpg" className="me-3" />
          <h2>Atharva Shinde</h2>
        </div>
      </div>
      <ul className="mt-5">
        <li>
          <span>Frontend:</span><p>HTML5, CSS3, JavaScript (ES6+), React.js,
          Bootstrap, Tailwind CSS</p>
        </li>
        <li>
          <span>UI/UX:</span><p> Responsive Design, Dark Mode Themes,
          Animations, Form Validation</p>
        </li>
        <li>
          <span>Tools:</span><p> Git & GitHub, VS Code, Netlify/Vercel, REST
          API Integration</p>
        </li>
        <li>
          <span>Other:</span> <p>Problem Solving, Collaboration, Clean Code
          Practices</p>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Skills;
