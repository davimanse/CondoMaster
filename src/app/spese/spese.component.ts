import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-spese',
  templateUrl: './spese.component.html',
  styleUrl: './spese.component.scss'

})
export class SpeseComponent implements OnInit{



    constructor() { }
  
    ngOnInit(): void {
      this.createLineChart();
      this.createBarChart();
      this.createPieChart();
    }

   createLineChart() {
    // Dati di esempio per il grafico a linee
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const options = {
      scales: {
        y: {
          type: 'linear', // Change the type to 'linear'
          beginAtZero: true
        }
      }
    };

    const lineChart = new Chart('lineChart', {
      type: 'line',
      data: data,
  
    });
  }

  createBarChart() {
    // Dati di esempio per il grafico a barre
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'My First Dataset',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange'
        ],
        borderColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const barChart = new Chart('barChart', {
      type: 'bar',
      data: data,
      options: options
    });
  }

  createPieChart() {
    // Dati di esempio per il grafico a torta
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'red',
          'blue',
          'yellow'
        ],
        hoverOffset: 4
      }]
    };

    const pieChart = new Chart('pieChart', {
      type: 'doughnut',
      data: data
    });
  }

  
    
}
