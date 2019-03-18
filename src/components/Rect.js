import React from 'react';

const Rect = props => {
  const style = {
    fill: props.fill || 'rgb(0,0,255)',
    strokeWidth: props.strokeWidth || 1,
    stroke: 'rgb(0,0,0)'
  };

  const width = props.width || 20;
  const height = props.height || 20;
  const x = props.x || 0;
  const y = props.y || 0;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} style={style} />
    </g>
  );
};

export default Rect;
