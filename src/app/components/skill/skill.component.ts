import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  starts(index: number): boolean[] {

    const starts: boolean[] = [];

    for (let i = 0; i < 5; i++) {

      if (i < this.skills[index].start) {
        starts[i] = true;
        continue;
      } 

        starts[i] = false;
      

    }

    return starts;
  }

}
