import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import Rect from './components/Rect';
import './styles.css';

const body = document.querySelector('body');

function generateRects({ height, width }) {
  let changeX = 0;
  let changeY = 0;
  return new Array(50).fill(null).map((_, i) => {
    let x = (40 + 20) * changeX++;
    let y = (40 + 20) * changeY;
    if (x + 40 >= width) {
      changeX = 0;
      changeY++;
    }
    return (
      <g>
        <Rect
          key={i}
          width={40}
          height={40}
          x={x}
          y={y}
          bHeight={height}
          bWidth={width}
        />
      </g>
    );
  });
}

function generateRectsV2({ height, width }) {
  const rectW = 40;
  const jsx = [];
  for (let i = 0; i < height; i += rectW) {
    for (let j = ((i / rectW) % 2) * rectW; j < width; j += rectW * 2) {
      jsx.push(
        <Rect
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          key={`${i}${j}`}
          width={rectW}
          height={rectW}
          x={j}
          y={i}
          bHeight={height}
          bWidth={width}
        />
      );
    }
  }

  return <g>{jsx}</g>;
}

function App() {
  const [height, setHeight] = useState(body.offsetHeight);
  const [width, setWidth] = useState(body.offsetWidth);

  useEffect(
    () => {
      const updateWindowSize = () => {
        setHeight(body.offsetHeight);
        setWidth(body.offsetWidth);
      };
      window.addEventListener('resize', updateWindowSize);
      return () => {
        window.removeEventListener('resize', updateWindowSize);
      };
    },
    [height, width]
  );

  return (
    <svg
      style={{ border: '1px solid red' }}
      height={height}
      width={width}
      className="App"
    >
      <g>
        <Grid
          color="rgba(155, 89, 182,0.4)"
          gap={20}
          height={height}
          width={width}
        />
      </g>
      <g>
        <Grid
          color="rgba(39, 174, 96, 0.4)"
          gap={60}
          height={height}
          width={width}
        />
      </g>
      {generateRectsV2({ height, width })}
    </svg>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
