import React from "react";
import {Routes, Route , Link, NavLink} from "react-router";
import { Avatar } from "@mui/material";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";

const App = ()=>{
    return(
        <section className="container">
            <div className="outer d-flex justify-content-evenly align-items-center py-3 border-bottom border-2 mb-5">
                <div className="inner me-5">
                    <h1>My Portfolio</h1>
                </div>
                <div className="inner">
                    <nav className="Nav ms-5">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/project">Projects</Link>
                    </li>
                </ul>
            </nav>
                </div>
            </div>

            <Routes>                
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/education" element={<Education/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/project" element={<Project/>}></Route>
                {/* <Route path="/project" element={<Project/>}></Route> */}
                
            </Routes>
        </section>
    )
}

export default App;