export default function RefLink(props) {
  return (
    <>
      <div className="row">
        <a className="App-link" href={props.url}>
          {props.name}
        </a>
      </div>
    </>
  );
}
