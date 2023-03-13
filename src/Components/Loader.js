
export const Loader = () => {
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "none",
        shapeRendering: "auto",
        display: "flex",
        alignItems: 'center'
      }}
      width="224px"
      height="224px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx={50}
        cy={50}
        r={11}
        strokeWidth={2}
        stroke="#ffffff"
        strokeDasharray="17.27875959474386 17.27875959474386"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.6097560975609756s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
      <circle
        cx={50}
        cy={50}
        r={8}
        strokeWidth={2}
        stroke="#ffffff"
        strokeDasharray="12.566370614359172 12.566370614359172"
        strokeDashoffset="12.566370614359172"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.6097560975609756s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        />
      </circle>
    </svg>;

}