import React from 'react'
import { Avatar } from "@mui/material";


const About = () => {
  return (
    <React.Fragment>
       <style>
        {`
          .abouthead{
            font-size:30px;
            font-weight:500;
          }
          .abouttxt{
          font-size:25px;
          }
        `}
      </style>
      <div className="outer d-flex justify-content-between align-items-center">
        <div className="abouthead">About</div>
        <div className="d-flex">
          <Avatar alt="My photo" src="./images/img3.jpg" className="me-3" />
          <h2>Atharva Shinde</h2>
        </div>
      </div>
      <div className="abouttxt mt-5">
        Hi, I’m Atharva Shinde, a frontend developer passionate about creating seamless digital experiences. I specialize in crafting responsive and interactive interfaces using React, JavaScript, HTML, CSS, Bootstrap, and Tailwind. My focus is on delivering modern designs that are not just visually appealing but also fast, accessible, and user-friendly.
      </div>
    </React.Fragment>
  )
}

export default About;