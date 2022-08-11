import React from "react";
import "./Blog.css";
import Profile from "./components/Profile";
import Names from "./components/Names";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Social from "./components/Social";

function Blog() {
  return (
   <div className="cardBody">
      <div className="card">
        <Profile />
        <Names />
        <Buttons />
        <About />
        <Social />
      </div>
      </div>
 
  );
}
export default Blog;
