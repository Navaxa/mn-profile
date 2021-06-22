import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from 'src/app/models/portfolio-item';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @Input() itemP: PortfolioItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
