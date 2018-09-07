import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeSections: any[];
  constructor() { }

  ngOnInit() {
    this.homeSections = [
      {
        title: "Weddings",
        url_image: '../../assets/img/wedding1_home_section.png'
      },
      {
        title: "Quinceanera",
        url_image: '../../assets/img/quince1_home_section.png'
      },
      {
        title: "Baby Shower",
        url_image: '../../assets/img/baby1_home_section.png'
      },
      {
        title: "Baptism & Communion",
        url_image: '../../assets/img/baptism_home_section.jpeg'
      }
      ];
  }

}
