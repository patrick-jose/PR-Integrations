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
  chartData = [];
  openedPRs: number;

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

    const timeFormat = 'DD/MM/YYYY HH:mm';

    function randomScalingFactor() {
      return Math.floor(Math.random() * 50);
    }
    function newDate(days: moment.DurationInputArg1) {
      return newDateString(moment().add(days, 'd').toDate());
    }
    function newDateString(days) {
      return moment().add(days, 'd').format(timeFormat);
    }

    const PRs = [];
    for (let index = 0; index >= -10; index--) {
      PRs.push(randomScalingFactor());
      this.chartData.push(
        {
          x: newDateString(index),
          y: PRs[PRs.length - 1]
        }
      );
    }

    Promise.resolve(null).then(() => this.openedPRs = PRs[0]);

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
          label: 'PRs Abertos',
          backgroundColor: 'rgb(0, 173, 210)',
          borderColor: 'rgb(0, 140, 175)',
          borderWidth: 3,
          pointRadius: 2,
          pointHoverRadius: 4,
          pointHitRadius: 2,
          fill: false,
          data: this.chartData,
        }]
      },
      options: {
        title: {
          text: 'Histórico de Pull Requests Abertos',
          display: true,
          fontSize: 25,
          fontFamily: 'Montserrat',
          fontColor: 'black',
          fontStyle: 'normal',
          padding: 40,
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: 'rgb(0, 173, 210, 0.6)',
          displayColors: false,
          bodyFontFamily: 'Montserrat',
          titleFontFamily: 'Montserrat',
          bodyFontColor: 'rgb(9, 24, 39)',
          titleFontColor: 'rgb(9, 24, 39)',
        },
        scales: {
          xAxes: [{
            type: 'time',
            gridLines: {
              display: false,
            },
            time: {
              parser: timeFormat,
              tooltipFormat: 'DD MMM YYYY'
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
