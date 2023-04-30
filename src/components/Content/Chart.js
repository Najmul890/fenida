import React from "react";
import { Chart, RadialLinearScale, ArcElement, Title, Tooltip } from "chart.js";
import { PolarArea } from "react-chartjs-2";
Chart.register(RadialLinearScale, ArcElement, Title, Tooltip);

const ChartArea = () => {

  const labels = ["Defending Impact", "Profession Retention", "Set Plays", "Ball Progression", "short Creation","Defending Frequency"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "#",
        data: [97, 98, 98, 53, 60, 52],
        backgroundColor: [
          
          "#192252",
          "#192252",
          "#192252",
          "#FEC44F",
          "#EA3139",
          "#EA3139",
          
          
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
        r:{
            suggestedMin: 15,
            suggestedMax: 100,
            grid: {
                circular: true,
                color: "#000"
            },
            angleLines: {
                display: true,
                color:"#000",
                lineWidth: 1,
            },
            pointLabels: {
                display: true,
                font: {
                    size: 16
                },
                padding: 0,
            }
        }
    }
  }

  return <div style={{height:"600px", width:"600px"}} >
    <PolarArea data={data} options={options}></PolarArea>
  </div>;
};

export default ChartArea;
