import React from "react";
import { Avatar } from "@mui/material";

const Education = () => {
  return (
    <React.Fragment>
      <style>
        {`
          .eduhead{
            font-size:30px;
            font-weight:500;
          }
          .edu-item h3{
            font-size:25px;
          }
          .edu-item p{
            font-size:20px;
          }
          .edu-item span{
            font-size:18px;
          }
          `}
      </style>
      <div className="outer d-flex justify-content-between align-items-center">
        <div className="eduhead">Education</div>
        <div className="d-flex">
          <Avatar alt="My photo" src="./images/img3.jpg" className="me-3" />
          <h2>Atharva Shinde</h2>
        </div>
      </div>
      <div class="edu-item mt-5">
        <h3>Bachelor of Engineering in Computer Science</h3>
        <p>KJ college of engineering & management research pune</p>
        <span>2022 – 2026 (Expected)</span>
      </div>

      <div class="edu-item mt-5">
        <h3>Higher Secondary (Class XII, Science)</h3>
        <p>N M V Highschool & Junior College</p>
        <span>2021 – 2022</span>
      </div>

      <div class="edu-item mt-5">
        <h3>Secondary School (Class X)</h3>
        <p>Kashinathrao Khutwad Memorial School</p>
        <span>2019 – 2020</span>
      </div>
    </React.Fragment>
  );
};

export default Education;
