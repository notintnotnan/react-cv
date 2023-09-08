import { icons } from "../data/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RefLink(props) {
  return (
    <>
      <div className="col text-center">
        <a className="App-link" href={props.url}>
          <FontAwesomeIcon className="faicon fa-xl" icon={icons[props.name]} />
        </a>
      </div>
    </>
  );
}
