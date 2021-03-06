import { Component, Input, OnInit } from '@angular/core';
import { Certified } from 'src/app/models/certified';

@Component({
  selector: 'app-certifieds',
  templateUrl: './certifieds.component.html',
  styleUrls: ['./certifieds.component.css']
})
export class CertifiedsComponent implements OnInit {

  certifieds: Certified[] = [
    {
      urlImg: "https://github.com/Navaxa/Miguel-Nava/blob/master/img/OOP-coursera-specialization.PNG?raw=true",
      name: "Object Oriented Programming in Java",
      platform: "coursera",
      entities: ["Duke University", "UC San Diego"],
      urlCredential: "https://www.coursera.org/account/accomplishments/specialization/certificate/H3RJRNND7QUL"
    },
    {
      urlImg: "https://github.com/Navaxa/Miguel-Nava/blob/master/img/ADP-coursera.PNG?raw=true",
      name: "App Deployment, Debugging, and Performance",
      platform: "coursera",
      entities: ["Google Cloud"],
      urlCredential: "https://www.coursera.org/account/accomplishments/certificate/BAK34HMUZWGZ"
    },
    {
      urlImg: "https://github.com/Navaxa/Miguel-Nava/blob/master/img/az900.PNG?raw=true",
      name: "AZ 900 - Azure Fundamentals",
      entities: ["Microsoft Certified"],
      idCertified: "verify.certiport.com: wMWaA-Fa4F",
      urlCredential: "https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=mXA9RTY4d1hNopHFh0kx7g=="
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
