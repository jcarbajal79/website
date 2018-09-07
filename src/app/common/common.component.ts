import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Common Component';
  }

}
