import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LanguageContext } from "../App";

export default function HeroSection(props) {
  const [lang, langFun] = useContext(LanguageContext);
  const navigate = useNavigate();

  const curriculumNavigation = () => {
    navigate("/curriculum");
  };

  return (
    <>
      <div className="heroContianer">
        <div
          className="heroMainImage"
          style={{ backgroundImage: `url(${props.heroImgUrl})` }}
        >
          <div className="heroMainText">
            <h1>
              {lang === 0 ? "¡Los datos lo son todo!" : "Data is everything!"}
            </h1>
            <p>
              {lang === 0
                ? "Desde excelecia en la recolección hasta creatividad en la visualización y la innovación"
                : "From extraction excellence to creativity on visualization and innovation"}
            </p>
            <button className="app-button" onClick={curriculumNavigation}>
              {lang === 0 ? "¡Conóceme!" : "Get to know me!"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
