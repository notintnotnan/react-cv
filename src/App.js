import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./media/fonts/Oswald-Light.ttf";
import "./media/fonts/Oswald-Regular.ttf";
import "./media/fonts/Oswald-Bold.ttf";

import "./App.css";

import Homepage from "./views/Homepage";
import Curriculum from "./views/Curriculum";
import More from "./views/More";

import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";

import dataEs from "./data/spanish.js";
import dataEn from "./data/english.js";

export const CurriculumContext = createContext();
export const LanguageContext = createContext();

export default function App() {
  const [language, setLanguage] = useState(0);
  const [cvData, setCVData] = useState(dataEs);
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"
  );

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

  const changeTheme = () => {
    setTheme((current) => {
      return current === "light" ? "dark" : "light";
    });
  };

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  useEffect(() => {
    setCVData(langDict[language]);
  }, [language]);

  return (
    <>
      <div className="App">
        <LanguageContext.Provider value={[language, changeLanguage]}>
          <CurriculumContext.Provider value={cvData}>
            <BrowserRouter>
              <ScrollToTop />
              <NavigationBar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/more" element={<More />} />
              </Routes>
            </BrowserRouter>
          </CurriculumContext.Provider>
        </LanguageContext.Provider>
      </div>
    </>
  );
}
