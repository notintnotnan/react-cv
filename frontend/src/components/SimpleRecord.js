import { dateFormatString } from "../utils/utils";

export default function SimpleRecord(props) {
  const title = `${props.degree}, ${props.institution}, ${props.city}`;

  return (
    <>
      <div className="row">
        <h5 className="m-0">{title}</h5>
        <div className="row">
          <p className="recordDates">
            {dateFormatString(props.start, props.lang)} -{" "}
            {dateFormatString(props.end, props.lang)}
          </p>
        </div>
      </div>
    </>
  );
}
