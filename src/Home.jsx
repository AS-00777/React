import React from "react";
import { Avatar } from "@mui/material";
import styled from "@emotion/styled";

const Home = () => {

  return (
    <React.Fragment>
      <style>
        {`
          .outer{
            width:90%;
          }
          .innerimg{
            height:500px;
            border-radius:50%;
          }
          .innertxt{
          text-align:justify;
          margin-left:40px;
          padding-right:50px;
          font-size:25px;
          }
          .hero{
          font-size:50px;
          font-weight:bold;
          margin-right:90px;
          width:30%;
          }
          `}
      </style>
      <div className="outer d-flex justify-content-between align-items-center mt-5">
        <div className="inner innertxt">
            <span className="hero">Hi, I'm Atharva Shinde </span>
          <p className="mt-2">
            Enthusiastic Frontend Developer with hands-on experience in building
            projects like food delivery applications, hotel booking systems, and
            form validation platforms. Skilled in React, JavaScript, and modern
            design libraries, with a strong focus on responsive and user-centric
            web solutions.
          </p>
        </div>
        <div className="inner innerimg" >
          <img src="./images/img3.jpg" className="innerimg" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
