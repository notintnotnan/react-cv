import React from "react";
import "./media/fonts/Oswald-Light.ttf";
import "./media/fonts/Oswald-Regular.ttf";
import "./media/fonts/Oswald-Bold.ttf";

import { useState } from "react";

import "./App.css";
import Curriculum from "./views/Curriculum";
import Languages from "./views/Languages";
import data from "./data/spanish.js";

export default function App() {
  const [language, setLanguage] = useState(0);
  const [cvData, setCVData] = useState(data);

  const loadDataJson = async () => {
    const keys = { 0: "spanish", 1: "english" };
    return (await import(`./data/${keys[language]}.js`)).default;
  };

  const changeLanguage = async () => {
    if (language !== 0) {
      setLanguage(0);
    } else {
      setLanguage(1);
    }
  };

  const translate = () => {
    changeLanguage();
    loadDataJson().then((json) => {
      setCVData(json);
    });
  };

  return (
    <>
      <div className="App container">
        <Curriculum lang={language} langFun={translate} data={cvData} />
      </div>
    </>
  );
}
