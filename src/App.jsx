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
    </div>
  );
};
export default GridLights;
