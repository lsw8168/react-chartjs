import React, { Component } from "react";
import LineGraph from "./LineGraph";
import { data1, data2, yearLabels } from "./mockData";

export default class App extends Component {
  state = {
    data1: data1,
    data2: data2,
    labels: yearLabels
  };

  render() {
    const { data1, data2, labels } = this.state;
    return (
      <div>
        <header>
          <h1>Sales Dashboard</h1>
        </header>
        <LineGraph data1={data1} data2={data2} labels={labels} />
      </div>
    );
  }
}
