import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Item } from 'src/app/models/skill';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() active: string = '';
  @Output() onFilterSkill: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFilter(item: Item) {
    this.onFilterSkill.emit(item);
  }

}
