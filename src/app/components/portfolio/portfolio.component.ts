import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from 'src/app/models/portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  itemP: PortfolioItem[] = []

  constructor() { }

  ngOnInit(): void {

    this.itemP = [
      {
        name: 'energy solutions',
        description: 'portfolio.description-ns',
        urlImg: 'https://github.com/Navaxa/Miguel-Nava/blob/master/img/EnergySolution.png?raw=true',
        urlPortfolio: 'https://work-click.000webhostapp.com/index.php'
      },
      {
        name: 'YoCompartoMexico',
        description: 'portfolio.description-ycm',
        urlImg: 'https://github.com/Navaxa/Miguel-Nava/blob/master/img/yocomparto.PNG?raw=true',
        urlPortfolio: 'https://www.behance.net/gallery/108999357/YoCompartoMexico'
      },
      {
        name: 'batatabit',
        description: '',
        urlImg: 'https://github.com/Navaxa/Miguel-Nava/blob/master/img/portafolio.PNG?raw=true',
        urlPortfolio: 'https://www.behance.net/gallery/110279205/Batatabit'
      }
    ]

  }

}
