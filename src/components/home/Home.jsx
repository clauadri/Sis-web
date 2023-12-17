// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Avatar from "../../assets/avatar1.jpg";
import ScrollFile from "./ScrollFile";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Avatar} alt="avatar" className="home__img" />
        <h1 className="home__name">Carla Camelia Pasca</h1>
        <h3 className="info">
          <strong>Traductora Jurada</strong>
        </h3>
        <a href="#contact" className="btn">
          Contact Me
        </a>
        <ScrollFile />
      </div>
    </section>
  );
};

export default Home;
