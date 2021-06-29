import { Component, OnInit } from '@angular/core';
import { Item, Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private tempSkills: Skill[] = [];
  itemActive: string = '';
  skills: Skill[] = [
    {
      name: 'angular',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      start: 3,
      area: 'frontend'
    },
    {
      name: 'react',
      img: 'data:image/png;base64,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',
      start: 2,
      area: 'frontend'
    },
    {
      name: 'javascript',
      img: 'data:image/png;base64,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',
      start: 3,
      area: 'frontend'
    },
    {
      name: 'bootstrap',
      img: 'https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg',
      start: 2,
      area: 'frontend'
    },
    {
      name: 'typescript',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      start: 3,
      area: 'ldn'
    },
    {
      name: 'node Js',
      img: 'https://img2.freepng.es/20180410/qgw/kisspng-node-js-javascript-database-mongodb-native-5acd4ebf6b4b75.3634484415234044794395.jpg',
      start: 3,
      area: 'ldn'
    },
    {
      name: 'java',
      img: 'http://www.manualweb.net/img/logos/java.png',
      start: 3,
      area: 'ldn'
    },
    {
      name: 'spring boot',
      img: 'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png',
      start: 2,
      area: 'ldn'
    },
    {
      name: 'mySQL',
      img: 'https://www.neolo.com/blog/wp-content/uploads/2016/02/mysql.png',
      start: 3,
      area: 'db'
    },
    {
      name: 'mongoDB',
      img: 'http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png',
      start: 2,
      area: 'db'
    },
    {
      name: 'docker',
      img: 'https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png',
      start: 3,
      area: 'deployment'
    },
    {
      name: 'azure',
      img: 'https://play-lh.googleusercontent.com/TckA-A_COVAujJtzvpgGhwVkkYCBEDbZe-GLaA9kVbZra1Vcoy7oPXCUG3y0GP2AZg',
      start: 2,
      area: 'deployment'
    },
    {
      name: 'git',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2-7Wfkt3qIOPRGnFiePq8Af4i_cIedoWAAb4rdyfalsBvkiCo8XsJAYC8zams_uIwE&usqp=CAU',
      start: 3,
      area: 'other'
    },
    {
      name: 'github',
      img: 'https://hangekiouchi.online/wp-content/uploads/2020/05/partner-logo-githubenterprise.png',
      start: 3,
      area: 'other'
    }
  ];

  items: Item[] = [
    {
      name: 'skills.item.stack',
      key: ''
    },
    {
      name: 'frontend',
      key: 'frontend'
    },
    {
      name: 'skills.item.bl',
      key: 'ldn'
    },
    {
      name: 'skills.item.db',
      key: 'db'
    },
    {
      name: 'skills.item.deploy',
      key: 'deployment'
    },
    {
      name: 'skills.item.other',
      key: 'other'
    }
  ];


  constructor() { }

  ngOnInit(): void {
    this.tempSkills = this.skills;
  }

  filterSkill(item: Item): Skill[] {
    const { key } = item;
    this.skills = this.tempSkills;
    this.itemActive = key;

    if ( key === '' ) {
      return this.skills = this.skills.filter(skill => skill.area !== key);
    }

    return this.skills = this.skills.filter(skill => skill.area === key);
  }

}
