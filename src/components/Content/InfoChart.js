import React from 'react';
import ChartArea from './Chart';

const InfoChart = () => {
    return (
        <div style={{width:"700px"}} className="p-5 bg-white ms-4">
            <div>
        <button
          style={{
            backgroundColor: "rgba(25, 34, 82, 0.12)",
            color: "#192252",
            fontWeight: "700",
          }}
          className="btn "
        >
          Model
        </button>
        <button
          style={{ color: "#848FAC", fontWeight: "700" }}
          className="btn mx-4"
        >
          Style
        </button>
        <button
          style={{ color: "#848FAC", fontWeight: "700" }}
          className="btn "
        >
          Contribution
        </button>
      </div>
      <ChartArea/>
        </div>
    );
};

export default InfoChart;