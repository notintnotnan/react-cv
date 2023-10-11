import { useContext } from "react";
import { LanguageContext } from "../App.js";
import { useNavigate } from "react-router-dom";

export default function UnderConstructionSection() {
  const [lang, langFun] = useContext(LanguageContext);
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="section-comingSoon">
        <div className="section-comingSoonTitle">
          <h1>{lang === 0 ? "¡Muy pronto!" : "Coming Soon!"}</h1>
        </div>
        <img
          className="section-comingSoonImage"
          src="images/projectsImg.jpg"
        ></img>
        <div className="section-comingSoonCall">
          <div>
            <p>
              {lang === 0
                ? "Este lugar está en construcción en este momento."
                : "This place is under construction right now..."}
            </p>
          </div>
          <button className="app-button" onClick={homeNavigate}>
            Home
          </button>
        </div>
      </div>
    </>
  );
}
