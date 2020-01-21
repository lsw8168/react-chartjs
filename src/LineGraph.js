import React, { Component } from "react";
import Chart from "chart.js";
let myLineChart;

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }
  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    let gradientFill = myChartRef.createLinearGradient(0, 0, 0, 250);
    gradientFill.addColorStop(0, "rgba(0, 0, 0, 0.1)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.5)");

    const { data1, data2, labels } = this.props;

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: "Sales",
            borderColor: "red",
            fill: true,
            lineTension: 0,
            backgroundColor: gradientFill,
            borderWidth: 1,
            data: data1
          },
          {
            label: "National Average",
            borderColor: "blue",
            fill: true,
            lineTension: 0,
            backgroundColor: gradientFill,
            borderWidth: 1,
            data: data2
          }
        ]
      },
      options: {
        //Customize chart options
        legendCallback: function(myLineChart) {
          console.log(myLineChart);
          var text = [];
          text.push("<ul>");
          for (var i = 0; i < myLineChart.data.datasets[0].data.length; i++) {
            text.push("<li>");
            text.push(
              "<span>" + myLineChart.data.datasets[0].data[i] + "</span>"
            );
            if (myLineChart.data.labels[i]) {
              text.push(myLineChart.data.labels[i]);
            }
            text.push("</li>");
          }
          text.push("</ul>");
          console.log(text);
          return text.join("");

          // myLineChart.data.datasets.map(d => console.log(d));
        }
      }
    });
    document.getElementById(
      "do_legend"
    ).innerHTML = myLineChart.generateLegend();
  };
  render() {
    return (
      <div>
        <div id="do_legend" />
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
