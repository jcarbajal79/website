import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {

  weddingTitle: string;

  constructor() {
    this.weddingTitle = "Wedding Invitations";
  }

  ngOnInit() {
  }

}
