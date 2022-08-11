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
        <About
        style={{
            paddingBottom: 200,
          }}
          titre="About"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            nihil dolor beatae rem facilis quae sapiente tempora aperiam quidem
            sunt."
        />

        <About
          
          titre="Interest"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            nihil dolor beatae rem facilis quae sapiente tempora aperiam quidem
            sunt."
        />

        <Social />
      </div>
    </div>
  );
}
export default Blog;
