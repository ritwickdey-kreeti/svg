import React from "react";

const Grid = props => {
  const strokeColor = props.color || "red";
  const { width, height } = props;
  const gap = props.gap || 20;

  let verticalLines = "";
  let horizentalLines = "";

  for (let i = 1; i < width; i++) {
    verticalLines += ` M${gap * i} 0 V${height}`;
  }

  for (let i = 1; i < height; i++) {
    horizentalLines += ` M0 ${gap * i} H${width}`;
  }

  return (
    <g>
      <path d={verticalLines} stroke={strokeColor} />
      <path d={horizentalLines} stroke={strokeColor} />
    </g>
  );
};

export default Grid;
