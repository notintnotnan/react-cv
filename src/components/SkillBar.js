export default function SkillBar(props) {
  const widthPercent = String(100 * (props.value / props.max));
  return (
    <>
      <div className="d-grid">
        <div>
          <p className="m-0">{`${props.name} → ${props.text}`}</p>
        </div>
        <div
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: 10,
          }}
        >
          <div
            className="progress progressBarHeight"
            style={{
              height: 10,
              width: widthPercent + "%",
              backgroundColor: "gray",
            }}
          >
            <div
              className="progress-bar progressBarFill"
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
