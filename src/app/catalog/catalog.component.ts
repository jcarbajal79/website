import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catalog: any[];
  catalogItems: any[];

  constructor() {
    this.catalog = [
      {title: 'One'},
      {title: 'Two'}
    ]

    this.catalogItems = [
      {title: 'One'},
      {title: 'One'},
      {title: 'One'},
      {title: 'One'},
      {title: 'One'},
      {title: 'One'},
      {title: 'One'},
      {title: 'One'}
    ]


  }

  ngOnInit() {
  }

}
