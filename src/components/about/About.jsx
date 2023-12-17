// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Sobre mi</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Graduada en Traducción e Interpretación en la Universidad de
              Alicante y especializada en traducción jurídica y económica, con
              un máster en Traducción Institucional. Mis lenguas de especialidad
              son el inglés, el francés, el rumano y el español. Desde 2021,
              trabajo como traductora y correctora por cuenta propia, mientras
              lo compagino con ser profesora de inglés y de francés en una
              academia.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
