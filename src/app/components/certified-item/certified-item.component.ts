import { Component, Input, OnInit } from '@angular/core';
import { Certified } from 'src/app/models/certified';

@Component({
  selector: 'app-certified-item',
  templateUrl: './certified-item.component.html',
  styleUrls: ['./certified-item.component.css']
})
export class CertifiedItemComponent implements OnInit {

  @Input() itemCertified: Certified[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
