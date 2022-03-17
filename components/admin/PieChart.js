import React from "react";
import styles from "../../styles/PieChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
function findOcc(arr, key) {
  let arr2 = [];

  arr.forEach((x) => {
    // Checking if there is any object in arr2
    // which contains the key value
    if (
      arr2.some((val) => {
        return val[key] == x[key];
      })
    ) {
      // If yes! then increase the occurrence by 1
      arr2.forEach((k) => {
        if (k[key] === x[key]) {
          k["occurrence"]++;
        }
      });
    } else {
      // If not! Then create a new object initialize
      // it with the present iteration key's value and
      // set the occurrence to 1
      let a = {};
      a[key] = x[key];
      a["occurrence"] = 1;
      arr2.push(a);
    }
  });

  return arr2;
}
function PieChart({ data }) {
  var dataCount = findOcc(data, "brand");
  const processedData = {
    labels: dataCount.map((item) => item.brand),
    datasets: [
      {
        label: "Categories",
        data: dataCount.map((item) => item.occurrence),
        backgroundColor: [
          "rgb(255, 72, 66)",
          "rgb(0, 171, 85)",
          "rgb(24, 144, 255)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgb(255, 72, 66)",
          "rgb(0, 171, 85)",
          "rgb(24, 144, 255)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Brand Insights</div>
      <Pie data={processedData} />
    </div>
  );
}

export default PieChart;
