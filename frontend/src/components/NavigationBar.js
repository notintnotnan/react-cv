import { useContext, useState } from "react";
import { LanguageContext } from "../App";

import sections from "../data/sections";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [lang, langFun] = useContext(LanguageContext);
  const [smallMenu, setSmallMenu] = useState(false);

  const toggleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  };

  return (
    <>
      <header className="navbar-main">
        <nav className="navbar-row">
          <div className="navbar-brand">
            <div className="navbar-logo">
              <img src="/logo.png" />
            </div>
            <div className="navbar-title">
              <h1>Oscar Felipe {lang === 0 ? "Ramírez" : "Ramirez"} Pardo</h1>
            </div>
          </div>
          <div className="navbar-column">
            <div className="navbar-menu" onClick={toggleSmallMenu}>
              <span className="navbar-menuSpan"></span>
              <span className="navbar-menuSpan"></span>
              <span className="navbar-menuSpan"></span>
            </div>
            <ul className={`navbar-list ${smallMenu ? "open" : ""}`}>
              {sections[lang].map((section) => {
                return (
                  <li
                    key={section.title}
                    className="navbar-listItem clickable-round"
                  >
                    <NavLink className="navbar-link" to={section.url}>
                      {section.title}
                    </NavLink>
                  </li>
                );
              })}
              <li
                key={lang}
                className="navbar-listItem clickable-round"
                onClick={langFun}
              >
                <p className="navbar-link">{lang === 0 ? "Eng" : "Esp"}</p>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
