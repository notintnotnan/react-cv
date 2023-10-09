import { useNavigate } from "react-router-dom";

export default function SectionImageLeft(props) {
  const navigate = useNavigate();

  const sectionNavigation = () => {
    navigate(props.sectionUrl);
  };

  return (
    <>
      <div className="sectionContainer">
        <div className="sectionImageContainer">
          <img className="sectionMainImage" src={props.sectionImgUrl} />
        </div>
        <div className="sectionTextContainer">
          <div className="sectionText">
            <h3 className="sectionTitle">{props.sectionTitle}</h3>
            <div className="sectionDescription">
              <p>{props.sectionDesc}</p>
            </div>
          </div>
          <div className="sectionButton">
            <button className="app-button" onClick={sectionNavigation}>
              {props.sectionButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
