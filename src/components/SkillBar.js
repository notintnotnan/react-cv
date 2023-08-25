export default function SkillBar(props) {
  const widthPercent = String(100 * (props.value / props.max));
  return (
    <>
      <div className="d-grid">
        <div>
          <p className="m-0">{props.name}</p>
        </div>
        <div style={{ backgroundColor: "whitesmoke", borderRadius: 10 }}>
          <div
            className="progress"
            style={{
              height: 10,
              width: widthPercent + "%",
              backgroundColor: "gray",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={String(props.value)}
              aria-valuemin={"0"}
              aria-valuemax={String(props.max)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
