import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: any;

  constructor() { }

  ngOnInit() {
    this.items = [
      {'label':'Home', 'path':'/'},
      {'label':'Weddings', 'path':'wedding'},
      {'label':'Quinceanera', 'path':'xv'},
      {'label':'Sweet 16', 'path':'sweet16'},
      {'label':'Baby Shower', 'path': 'shower'},
      {'label':'Baptism', 'path': 'baptism'},
      {'label':'First Communion', 'path':'communion'}
    ];
  }

}
