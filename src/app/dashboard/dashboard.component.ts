import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  exchangeRate = 715000;
  targetAmount = 1;
  baseAmount = this.exchangeRate;
  
  

  update(baseAmount) {
    this.targetAmount = parseFloat(baseAmount) / this.exchangeRate;
  }


  constructor() { }

  ngOnInit() {
  }

}
