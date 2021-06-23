import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton = true;
  optionsSelect: Array<any>;

  // tslint:disable-next-line:typedef
  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }
  constructor(private fb: FormBuilder, private connectionService: ConnectionService) { 
    this.contactForm = fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
    contactFormSubjects: ['', Validators.required],
    contactFormMessage: ['', Validators.required],
    contactFormCopy: [''],
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  ngOnInit(): void {
  }

}