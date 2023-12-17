import React from "react";
import "./Career.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Career = () => {
  return (
    <section className="career container section" id="career">
      <h2 className="section__title">Recursos útiles para traductores</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <h3>Recursos en Español</h3>
          <p className="margin_all">
            Toda la ley para consultar textos legislativos, contratos modelos y
            formularios españoles.{" "}
            <a href="http://www.todalaley.com/" className="fi fi-es"></a>
          </p>
          <p className="margin_all">
            Enciclopedia de Economía, Enciclopedia que ofrece términos
            actualizados sobre el mundo de la economía y la empresa{" "}
            <a href=" http://www.economia48.com/ " className="fi fi-es"></a>
          </p>
          <p className="margin_all">
            Diccionario panhispánico del español jurídico. Diccionario realizado
            por la Real Academia española que incluye muchas definiciones
            propias del lenguaje jurídico.{" "}
            <a href="https://dpej.rae.es/" className="fi fi-es"></a>
          </p>
        </div>
        <div className="about__data grid">
          <h3>Recursos en Francés</h3>
          <p className="margin_all">
            Le portail de l&#39;Union européenne. Página en la que se puede
            encontrar información en francés sobre la organización judicial en
            Europa y las instituciones internacionales.{" "}
            <a
              href="http://europa.eu/institutions/index_fr.htm "
              className="fi fi-fr"
            ></a>
          </p>
          <p className="margin_all">
            Le Cedef. Le site du Centre de documentation Économie-Finance.
            Herramienta útil que ayuda a encontrar textos oficiales e
            información económica y financiera.{" "}
            <a
              href="http://www.finances.gouv.fr/directions_services/cedef/index.htm"
              className="fi fi-fr"
            ></a>
          </p>
          <p className="margin_all">
            Juridicctionaire. Herramienta para la traducción y la redacción
            jurídicas. Ayuda a superar las dificultades lingüísticas asociadas a
            las particularidades del lenguaje jurídico. Disponible solo en
            francés.{" "}
            <a
              href=" https://www.noslangues-ourlanguages.gc.ca/fr/juridictionnaire/index-
fra#index "
              className="fi fi-fr"
            ></a>
          </p>
        </div>
        <div className="about__data grid">
          <h3>Recursos en Inglés</h3>
          <p className="margin_all">
            Encyclopedia of Law &amp; Economics. Enciclopedia en inglés relativa
            a cuestiones jurídicas y económicas.{" "}
            <a
              href="http://encyclo.findlaw.com/index.html "
              className="fi fi-gb"
            ></a>
          </p>
          <p className="margin_all">
            Law.com Dictionary. Diccionario jurídico en inglés que ofrece una
            gran variedad de términos relativos al derecho.{" "}
            <a
              href="http://dictionary.law.com/default2.asp "
              className="fi fi-gb"
            ></a>
          </p>
        </div>
        <div className="about__data grid">
          <h3>Recursos multilingües.</h3>
          <p className="margin_all">
            Iate. Base de datos terminológica multilingüe de la Unión Europea
            que contiene terminología en 12 idiomas de diversos campos de
            estudio, incluidos en derecho y la economía.{" "}
            <a href="https://iate.europa.eu/home " className="fi fi-eu"></a>
          </p>
          <p className="margin_all">
            Eurotermbank. Base de datos terminológica multilingüe que ofrece 45
            idiomas de diferentes campos de estudio, entre ellos el campo
            jurídico y el económico.{" "}
            <a href=" https://www.eurotermbank.com/ " className="fi fi-eu"></a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
