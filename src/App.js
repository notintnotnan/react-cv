import React, { useState, useEffect } from "react";
import "./media/fonts/Oswald-Light.ttf";
import "./media/fonts/Oswald-Regular.ttf";
import "./media/fonts/Oswald-Bold.ttf";

import "./App.css";
import Curriculum from "./views/Curriculum";
import Languages from "./views/Languages";
import dataEs from "./data/spanish.js";
import dataEn from "./data/english.js";

export default function App() {
  const [language, setLanguage] = useState(0);
  const [cvData, setCVData] = useState(dataEs);

  const langDict = {
    0: dataEs,
    1: dataEn,
  };

  const changeLanguage = () => {
    if (language !== 0) {
      setLanguage(0);
    } else {
      setLanguage(1);
    }
  };

  useEffect(() => {
    setCVData(langDict[language]);
  }, [language]);

  return (
    <>
      <div className="App container">
        <Curriculum lang={language} langFun={changeLanguage} data={cvData} />
      </div>
    </>
  );
}
