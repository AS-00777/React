import React from 'react'
import { Avatar } from "@mui/material";


const Project = () => {
  return (
  <React.Fragment>
     <style>
        {`
          .projecthead{
            font-size:30px;
            font-weight:500;
          }
          .box{
           border: 0px solid grey;        /* grey border */
           border-radius: 8px; 
           box-shadow: 0 4px 10px rgba(0,0,0,0.4);
          }
          .box .inner{
            width:400px;

          }
          .box .innertxt a{
           text-decoration:none;
           border:1px solid #0A58CA;
           background-color:#0A58CA;
           color:white;
           font-size:18px;
           padding:10px;
           margin-left:20px;
           border-radius:50px;
          }
          .box .innertxt p{
            font-size:20px;
            text-align:justify;
            padding:10px 20px 0px 20px;
          }
          .box .inner img{
            width:400px;
            border-radius:8px;
          }
        `}
      </style>
      <div className="outer d-flex justify-content-between align-items-center">
        <div className="projecthead">Project</div>
        <div className="d-flex">
          <Avatar alt="My photo" src="./images/img3.jpg" className="me-3" />
          <h2>Atharva Shinde</h2>
        </div>
      </div>
      <div className="box d-flex mt-5">
          <div className="inner">
            <img src="./images/dsbda.jpg" alt="" />
          </div>
          <div className="innertxt">
            <p>A Movie Genre Recommendation System built as part of the Data Science and Big Data Analytics (DSBDA) course. This project uses the TMDB 5000 Movies Dataset to analyze and recommend movie genres based on user preferences. It also features a draggable Python chatbot for interactive assistance.</p>
            <a href="https://dsbda-mini-project-r3xnred.onder.com/"> View Project</a>
          </div>
      </div>
      <div className="box d-flex mt-5">
          <div className="inner">
            <img src="./images/zomato.jpg" alt="" />
          </div>
          <div className="innertxt">
            <p>A full-featured Zomato Clone web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This clone allows users to browse restaurants, view menus, and simulate the experience of a food delivery platform — all with a clean, responsive UI.</p>
            <a href="https://zomato-clone-frontend-ns1l.onrender.com/"> View Project</a>
          </div>
      </div>
      <div className="box d-flex mt-5">
          <div className="inner">
            <img src="./images/form.jpg" alt="" />
          </div>
          <div className="innertxt">
            <p>Forms are an essential part of any website, and proper validation ensures that the submitted data is accurate and secure. This project focuses on implementing form validation using HTML, CSS, and JavaScript without relying on external libraries.</p>
            <a href="https://my-formvalidation-project.netlify.app/"> View Project</a>
          </div>
      </div>
      <div className='mt-5'></div>
    </React.Fragment>
  )
}

export default Project