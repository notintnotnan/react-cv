export default function DetailText(props) {
  let returnText = "";

  if (typeof props.id !== "undefined") {
    returnText = `+(${props.id}) ${props.detail}`;
  } else {
    returnText = props.detail;
  }

  return <p className="m-0 text-center">{returnText}</p>;
}
