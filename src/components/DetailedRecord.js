import { dateFormatString } from "../utils/utils";

export default function DetailedRecord(props) {
  const title = `${props.title}, ${props.employer}, ${props.city}`;
  return (
    <>
      <div className="row grid">
        <h5 className="m-0">{title}</h5>
        <div className="row">
          <p className="recordDates">
            {dateFormatString(props.start, props.lang)} -{" "}
            {dateFormatString(props.end, props.lang)}
          </p>
        </div>
        <div className="row">
          <p className="recordText">{props.description}</p>
        </div>
      </div>
    </>
  );
}
