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
        name: 'portfolio.nameVirdebo',
        description: 'Node js + Express + Angular + MySQL',
        urlImg: './assets/statics/img/virdebo.jpg',
        urlPortfolio: 'https://sivirdebo.com/'
      },    
      {
        name: 'cotizador criptomonedas',
        description: 'React Js',
        urlImg: './assets/statics/img/cotizador_crypto.PNG',
        urlPortfolio: 'https://navaxa.github.io/criptomonedas/'
      },    
      {
        name: 'administrador de pacientes',
        description: 'React Js',
        urlImg: './assets/statics/img/administrador_de_pacientes.jpg',
        urlPortfolio: 'https://navaxa.github.io/administrar-citas-react-app/'
      },    
      {
        name: 'crowfunding stellar react app',
        description: 'React Js',
        urlImg: './assets/statics/img/crowfunding.jpg',
        urlPortfolio: 'https://navaxa.github.io/crowfunding-stellar-react-app/'
      },    
      {
        name: 'YoCompartoMexico',
        description: 'portfolio.description-ycm',
        urlImg: 'https://github.com/Navaxa/Miguel-Nava/blob/master/img/yocomparto.PNG?raw=true',
        urlPortfolio: 'https://www.behance.net/gallery/108999357/YoCompartoMexico'
      },
      {
        name: 'portfolio.nameMN',
        description: 'JavaScript, HTML, CSS, Chatbot',
        urlImg: './assets/statics/img/mn.jpg',
        urlPortfolio: 'https://navaxa.github.io/Miguel-Nava/'
      },
      {
        name: 'batatabit',
        description: 'HTML, CSS',
        urlImg: 'https://github.com/Navaxa/Miguel-Nava/blob/master/img/portafolio.PNG?raw=true',
        urlPortfolio: 'https://www.behance.net/gallery/110279205/Batatabit'
      },
      {
        name: 'energy solutions',
        description: 'portfolio.description-ns',
        urlImg: 'https://github.com/Navaxa/Miguel-Nava/blob/master/img/EnergySolution.png?raw=true',
        urlPortfolio: 'https://work-click.000webhostapp.com/index.php'
      }
    ]

  }

}
