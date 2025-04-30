import { useState } from "react";
const GridLights = ({ size = 5 }) => {
  const [data, setData] = useState(
    new Array(size).fill(new Array(size).fill(false))
  );
  console.log(data);
  const handleClick = (value) => {
    console.log(value.split("-"));
    const [idx1, idx2] = value.split("-").map((eachIdx) => parseInt(eachIdx));
    setData((prev) => {
      const myarr = JSON.parse(JSON.stringify(prev));
      // up
      if (idx1 - 1 >= 0) {
        myarr[idx1 - 1][idx2] = !myarr[idx1 - 1][idx2];
      }
      // down
      if (idx1 + 1 < size) {
        myarr[idx1 + 1][idx2] = !myarr[idx1 + 1][idx2];
      }
      // left
      if (idx2 - 1 >= 0) {
        myarr[idx1][idx2 - 1] = !myarr[idx1][idx2 - 1];
      }
      // right
      if (idx2 + 1 < size) {
        myarr[idx1][idx2 + 1] = !myarr[idx1][idx2 + 1];
      }
      myarr[idx1][idx2] = !myarr[idx1][idx2];
      return myarr;
    });
  };
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Grid Lights
      </h2>
      <ul className="block-container">
        {data.map((value, id) => {
          return (
            <li key={id}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {value.map((eachArray, idx) => {
                  return (
                    <li
                      key={`${id}-${idx}`}
                      className={`box ${eachArray ? "active" : ""} `}
                      onClick={() => handleClick(`${id}-${idx}`)}
                    ></li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <h1>Question</h1>
      <div className="markdown-container"><h3>Requirements:</h3>
        <p>You are tasked with simulating a grid of lights that can be toggled on or off. The grid is initially in the "off" state. Each light in the grid can be toggled by clicking on it. When a light is toggled, the light itself and all adjacent lights (horizontally and vertically) also toggle their states.</p>
        <p>The grid is composed of n x n cells, and each cell represents a light that can either be on (1) or off (0). The grid starts with all lights in the off state.</p>
        <p>You need to implement a solution that allows toggling the lights and keeps track of the current state of the grid.</p>
        <h4>Component Structure:</h4>
        <ul>
          <li>A single functional component named <code>GridLights</code>.</li>
          <li>Grid size <code>n</code> should be passed as a prop (default to 5 if not provided).</li>
        </ul>
        <h4>State Management:</h4>
        <ul>
          <li>Use <code>useState</code> to manage the grid state.</li>
          <li>Maintain a 2D array to represent the current on/off state of each light.</li>
        </ul>
        <h4>UI Behavior:</h4>
        <ul>
          <li>Display the grid using simple square cells.</li>
          <li>A light in the "on" state should be visually different and have background color "gold".</li>
          <li>A light in the "off" state should have a neutral background color "lightgray".</li>
          <li>Clicking on a cell toggles the state of:
            <ul>
              <li>The clicked cell</li>
              <li>The top neighbor (if it exists)</li>
              <li>The bottom neighbor (if it exists)</li>
              <li>The left neighbor (if it exists)</li>
              <li>The right neighbor (if it exists)</li>
            </ul>
          </li>
          <li>Each cell should have role="cell"</li>
        </ul>
        <h4>User Interaction:</h4>
        <ul>
          <li>Clicking on a cell updates the grid immediately.</li>
          <li>UI should be responsive and update in real-time based on state.</li>
        </ul>
        <h3>Reference UI</h3>
        <p><img src="https://do6gp1uxl3luu.cloudfront.net/question-gif/gridLights.gif" alt="gridLights" /></p></div>

    </div>
  );
};
export default GridLights;
