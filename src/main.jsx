import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import global_es from "./components/i18n/es/global.json";
import global_en from "./components/i18n/en/global.json";
import global_fr from "./components/i18n/fr/global.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      translation: global_es,
    },
    en: {
      translation: global_en,
    },
    fr: {
      translation: global_fr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
