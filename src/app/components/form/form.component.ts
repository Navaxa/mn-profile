import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/services/email.service';
import { TemplateService } from 'src/app/view/template.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


    form: FormGroup = this.fb.group({
        name: ['', Validators.required],
        subject: ['', Validators.required],
        email: ['', Validators.email],
        message: ['', Validators.required]
    });

    success: boolean = false;
    spinner: boolean = false;

    constructor(private fb: FormBuilder,
        private toastr: ToastrService,
        private emailService: EmailService,
        public translate: TranslateService,
        private templateService: TemplateService) { }

    ngOnInit(): void {

    }

    showToastr() {
        const message = this.translate.instant("contact.sendEmail.message");
        return this.toastr.success(message);
    }

    showWarning() {
        return this.toastr.error('Por el momento este servicio no esta disponible!', 'Atención');
    }

    isValid(field: string) {
        return this.form.get(field)?.errors && this.form.controls[field].touched;
    }

    isEmail(): boolean {
        return this.form.get('email')?.errors?.email || (this.form.get('email')?.value === '' && this.form.controls['email'].touched);
    }

    send() {

        const HTML = this.templateService.generatePersonaleEmail(this.form.value);
        const HTML_FOR_USER = this.templateService.getTemplate();

        let subject = ""; 

        this.translate.get("contact.template.titleHead").subscribe(resp => subject = resp);

        
        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }

        if(this.isEmail()) {
            return this.form.markAllAsTouched();
        }

        const DATA = {
            to: "15030463@itesa.edu.mx",
            subject: this.form.value.subject,
            message: HTML
        }

        const DATA_FOR_USER = {
            to: this.form.value.email,
            subject: subject,
            message: HTML_FOR_USER
        }

        this.spinner = true;

        setTimeout(() => {
            this.spinner = false;
            this.form.reset();
            this.showToastr();
            this.success = true;
            this.emailService.sendPersonalEMail(DATA).subscribe();
            this.emailService.sendEmail(DATA_FOR_USER).subscribe();
        }, 3000)

        setTimeout(() => {
            this.success = false;
        }, 7000);

    }

}
