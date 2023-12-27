// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Avatar from "../../assets/avatar1.jpg";
import ScrollFile from "./ScrollFile";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation();

  function changeToEnglish() {
    i18n.changeLanguage("en");
  }
  function changeToSpanish() {
    i18n.changeLanguage("es");
  }
  function changeToFrench() {
    i18n.changeLanguage("fr");
  }
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Avatar} alt="avatar" className="home__img" />
        <h1 className="home__name">Carla Camelia Pasca</h1>
        <p>{t("idioma")}</p>
        <div>
          <button className="but" onClick={changeToEnglish}>
            <p className="fi fi-gb"></p>
          </button>
          <button className="but" onClick={changeToSpanish}>
            <p className="fi fi-es"></p>
          </button>
          <button className="but" onClick={changeToFrench}>
            <p className="fi fi-fr"></p>
          </button>
        </div>
        <h3 className="info">
          <p>{t("traductora-jurada")}</p>
        </h3>
        <a href="#contact" className="btn">
          {t("contact")}
        </a>
        <ScrollFile />
      </div>
    </section>
  );
};

export default Home;
