import React, { Component } from 'react';
import Chart from 'chart.js';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.chart = new Chart(this.props.id, {
      type: 'bar',
      data: this.props.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              fontSize: 10
            }
          }]
        }
      }
    });
  }

  componentWillReceiveProps (props) {
    this.chart.data = props.data;
    this.chart.update();
  }

  render() {
    return <canvas id={this.props.id} height='325'></canvas>;
  }
}
