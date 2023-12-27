// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";
const About = () => {
  const [t] = useTranslation();
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">{t("me")}</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">{t("description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
