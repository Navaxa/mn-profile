import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor(private toastr: ToastrService,
              public translate: TranslateService) { }

  ngOnInit(): void {
  }

  showToastr() {
    const message = this.translate.instant("contact.alert.message");
    const title = this.translate.instant("contact.alert.title");

    return this.toastr.warning(message, title);
  }

}
