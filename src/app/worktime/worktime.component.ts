import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);

@Component({
  selector: 'app-worktime',
  templateUrl: './worktime.component.html',
  styleUrls: ['./worktime.component.css'],
})
export class WorktimeComponent implements OnInit {
  today = Date.now();

  homeOffice: boolean = false;
  isFormCorrect: boolean;

  selectedOption: string;
  errorStr: string;
  errorFormStr: string;
  correctFormStr: string;

  workTimeFrom: string;
  workTimeTo: string;

  workChoices: string[] = ['od 7:30 do 15:30', 'od 8:30 do 16:30', 'inne'];

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.selectedOption = event.target.value;
  }

  isHomeOffice() {
    this.homeOffice = !this.homeOffice;
  }

  checkInputs(event: any) {
    if (this.workTimeFrom === undefined || this.workTimeTo === undefined) {
      event.preventDefault();
      this.errorStr = 'Podaj poprawne wartości';
    } else {
      this.errorStr = '';
      this.selectedOption =
        'od ' + this.workTimeFrom + ' do ' + this.workTimeTo;
      this.workChoices.push(this.selectedOption);
    }
  }

  sendForm(event) {
    if (this.selectedOption === undefined) {
      event.preventDefault();
      this.isFormCorrect = false;
      this.errorFormStr = 'Wybierz zmianę!';
    } else if (
      this.selectedOption === 'inne' &&
      (this.workTimeFrom === undefined || this.workTimeTo === undefined)
    ) {
      this.isFormCorrect = false;
      this.errorFormStr = 'Wypełnij formularz poprawnie';
    } else {
      this.isFormCorrect = true;
      this.correctFormStr = 'Formularz wysłany';
    }
  }
}
