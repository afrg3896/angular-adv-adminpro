
import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() titulo: string = 'Sin Titulo';
  @Input('labels') doughnutChartLabels: string[] = ['Vacio1','Vacio2', 'Vacio3'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE', '#F02059'] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  

}
