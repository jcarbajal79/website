import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  trends: any[];

  constructor() { }

  ngOnInit() {

    this.trends = [
      {title: 'Trending Now'}
    ];
  }

}
