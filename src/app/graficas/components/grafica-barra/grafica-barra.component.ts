import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input()horizontal:boolean=false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  @Input() barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData= {
    labels: [ /*'2015', '2016', '2017', '2018', '2019', '2020', '2021'*/ ],
    datasets: [/*
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },*/
    ]
  };

  constructor() { }

  ngOnInit(): void {
    
    if(this.horizontal){
      this.barChartType = 'line';
    }
  }

}
