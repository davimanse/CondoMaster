import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-spese',
  templateUrl: './spese.component.html',
  styleUrls: ['./spese.component.scss'] // correggi qui la key styleUrls, perché era styleUrl
})
export class SpeseComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.createLineChart();
    this.createBarChart();
    this.createPieChart(); // Inizializza il grafico a torta
  }

  createLineChart() {
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
          beginAtZero: true
        }
      }
    };

    const lineChart = new Chart('lineChart', {
      type: 'line',
      data: data,
      options: options,
    });
  }

  createBarChart() {
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
      options: options,
    });
  }

  createPieChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'Spese per Categoria',
        data: [300, 50, 100], // dati di esempio
        backgroundColor: [
          'red',
          'blue',
          'yellow'
        ],
        hoverOffset: 4
      }]
    };

    const pieChart = new Chart('pieChart', {
      type: 'doughnut', // potrebbe essere 'pie' o 'doughnut'
      data: data,
    });
  }
}
