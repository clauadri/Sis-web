import React from "react";
import {} from "react-icons/fc";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Services = () => {
  const [t] = useTranslation();
  return (
    <section className="career container section" id="career">
      <h2 className="section__title">{t("services")}</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <p className="margin_all">
            {t("tri")}
            <p className="fi fi-es"></p>
            <FaArrowLeft />
            <FaArrowRight />
            <p className="fi fi-gb"></p>
          </p>
        </div>
        <div className="about__data grid">
          <p className="margin_all">
            {t("trf")}
            <p className="fi fi-fr"></p>
            <FaArrowLeft />
            <FaArrowRight />
            <p className="fi fi-es"></p>
          </p>
        </div>
        <div className="about__data grid">
          <p className="margin_all">
            {t("trr")}
            <p className="fi fi-ro"></p>
            <FaArrowLeft />
            <FaArrowRight />
            <p className="fi fi-es"></p>
          </p>
        </div>
        <div className="about__data grid">
          <p className="margin_all">{t("tra")}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
