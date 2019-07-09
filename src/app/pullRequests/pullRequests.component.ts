import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart, ChartConfiguration } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pullRequests.component.html',
  styleUrls: ['./pullRequests.component.scss']
})
export class PullRequestsComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { read: ElementRef, static: false }) canvas: ElementRef;

  fiveUsers: object;
  threeUsers: object;
  chart: Chart;
  config: ChartConfiguration;
  color = Chart.helpers.color;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.get5Users().subscribe(data => {
      this.fiveUsers = data;
    });
    this.data.get3Users().subscribe(data => {
      this.threeUsers = data;
    });
  }

  ngAfterViewInit() {

    const timeFormat = 'MM/DD/YYYY HH:mm';

    function randomScalingFactor() {
      return Math.floor(Math.random() * 25);
    }
    function newDate(days: moment.DurationInputArg1) {
      return newDateString(moment().add(days, 'd').toDate());
    }
    function newDateString(days) {
      return moment().add(days, 'd').format(timeFormat);
    }

    const colors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };

    this.config = {
      type: 'line',
      data: {
        labels: [
          newDate(0),
          newDate(1),
          newDate(2),
          newDate(3),
          newDate(4),
          newDate(5),
          newDate(6)
        ],
        datasets: [{
          label: ' PRs Abertos',
          backgroundColor: 'rgb(0, 173, 210)',
          borderColor: 'rgb(0, 140, 175)',
          fill: false,
          data: [{
            x: newDateString(-24),
            y: randomScalingFactor()
          },
          {
            x: newDateString(-21),
            y: randomScalingFactor()
          },
          {
            x: newDateString(-18),
            y: randomScalingFactor()
          },
          {
            x: newDateString(-15),
            y: randomScalingFactor()
          },
          {
            x: newDateString(-12),
            y: randomScalingFactor()
          },
          {
            x: newDateString(-9),
            y: randomScalingFactor()
          },
          {
            x: newDateString(-6),
            y: randomScalingFactor()
          },
          {
            x: newDateString(-3),
            y: randomScalingFactor()
          },
          {
            x: newDateString(0),
            y: randomScalingFactor()
          }],
        }]
      },
      options: {
        title: {
          text: 'Histórico de Pull Requests Abertos',
          display: true,
          fontSize: 25,
          fontFamily: 'Montserrat',
          fontColor: 'black',
          padding: 40,
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: 'rgb(9, 24, 39)',
        },
        scales: {
          xAxes: [{
            type: 'time',
            gridLines: {
              display: false,
            },
            time: {
              parser: timeFormat,
              tooltipFormat: 'll HH:mm'
            },
            scaleLabel: {
              display: false,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: false,
              labelString: 'value'
            }
          }]
        },
      }
    };

    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), this.config);
  }
}
