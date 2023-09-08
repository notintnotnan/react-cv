import { icons } from "../data/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionTitle(props) {
  return (
    <>
      <div className="row text-center">
        <h4 className="col" style={{ padding: 0, margin: 0 }}>
          <FontAwesomeIcon className="faicon fa-xl" icon={props.icon} />
          {`    ${props.name}`}
        </h4>
      </div>
    </>
  );
}
