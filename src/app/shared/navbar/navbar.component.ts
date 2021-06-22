import { Component, Injectable, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  language: string = "";
  color: string = "";

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {

    const useLanguage = this.translate.getDefaultLang();

    if (useLanguage === 'es') {
      this.language = "en";
      this.color = "red";
    }

    if (useLanguage === 'en') {
      this.language = "es";
      this.color = "green";
    }

  }

  onChange() {

    const useLanguage = this.translate.getDefaultLang();

    if (useLanguage === 'es') {
      this.translate.setDefaultLang('en')
      this.language = useLanguage;
      this.color = "green";
    }

    if (useLanguage === 'en') {
      this.translate.setDefaultLang('es')
      this.language = useLanguage;
      this.color = "red";
    }

  }

}
