import React from "react";
import "./Career.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { useTranslation } from "react-i18next";
const Career = () => {
  const [t] = useTranslation();
  return (
    <section className="career container section" id="career">
      <h2 className="section__title">{t("h2")}</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <h3>{t("h31")}</h3>
          <p className="margin_all">
            {t("h31p1")}{" "}
            <a href="http://www.todalaley.com/" className="fi fi-es"></a>
          </p>
          <p className="margin_all">
            {t("h31p2")}{" "}
            <a href=" http://www.economia48.com/ " className="fi fi-es"></a>
          </p>
          <p className="margin_all">
            {t("h31p3")}{" "}
            <a href="https://dpej.rae.es/" className="fi fi-es"></a>
          </p>
        </div>
        <div className="about__data grid">
          <h3>{t("h32")}</h3>
          <p className="margin_all">
            {t("h32p1")}{" "}
            <a
              href="http://europa.eu/institutions/index_fr.htm "
              className="fi fi-fr"
            ></a>
          </p>
          <p className="margin_all">
            {t("h32p2")}{" "}
            <a
              href="http://www.finances.gouv.fr/directions_services/cedef/index.htm"
              className="fi fi-fr"
            ></a>
          </p>
          <p className="margin_all">
            {t("h32p3")}{" "}
            <a
              href=" https://www.noslangues-ourlanguages.gc.ca/fr/juridictionnaire/index-
fra#index "
              className="fi fi-fr"
            ></a>
          </p>
        </div>
        <div className="about__data grid">
          <h3>{t("h33")}</h3>
          <p className="margin_all">
            {t("h33p1")}{" "}
            <a
              href="http://encyclo.findlaw.com/index.html "
              className="fi fi-gb"
            ></a>
          </p>
          <p className="margin_all">
            {t("h33p2")}{" "}
            <a
              href="http://dictionary.law.com/default2.asp "
              className="fi fi-gb"
            ></a>
          </p>
        </div>
        <div className="about__data grid">
          <h3>{t("h34")}</h3>
          <p className="margin_all">
            {t("h34p1")}{" "}
            <a href="https://iate.europa.eu/home " className="fi fi-eu"></a>
          </p>
          <p className="margin_all">
            {t("h34p2")}{" "}
            <a href=" https://www.eurotermbank.com/ " className="fi fi-eu"></a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
