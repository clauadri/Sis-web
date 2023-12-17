import React from "react";
import {} from "react-icons/fc";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Services = () => {
  return (
    <section className="career container section" id="career">
      <h2 className="section__title">Servicios Ofrecidos</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <p className="margin_all">
            Traducción del inglés al español (o a la inversa).{" "}
            <p className="fi fi-es"></p>
            <FaArrowLeft />
            <FaArrowRight />
            <p className="fi fi-gb"></p>
          </p>
        </div>
        <div className="about__data grid">
          <p className="margin_all">
            Traducción del francés al español (o a la inversa).{" "}
            <p className="fi fi-fr"></p>
            <FaArrowLeft />
            <FaArrowRight />
            <p className="fi fi-es"></p>
          </p>
        </div>
        <div className="about__data grid">
          <p className="margin_all">
            Traducción del rumano al español (o a la inversa).
            <p className="fi fi-ro"></p>
            <FaArrowLeft />
            <FaArrowRight />
            <p className="fi fi-es"></p>
          </p>
        </div>
        <div className="about__data grid">
          <p className="margin_all">
            Traducción y corrección de textos de tema jurídico y económico
            (actas de nacimiento, actas de defunción, patentes y marcas,
            capitulaciones matrimoniales, cuentas anuales, informes de gestión,
            informes de rating, letras de cambio, etc.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
