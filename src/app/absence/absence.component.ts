import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css'],
})
export class AbsenceComponent implements OnInit {
  absenceList: string[] = [
    'Urlop wypoczynkowy',
    'Urlop okolicznościowy',
    'Zwolnienie lekarskie',
    'Opieka nad dzieckiem art.188 KP',
    'Zasiłek opiekuńczy',
    'Szkolenie',
    'Delegacja',
    'Inne',
  ];

  selectedOption: string;
  absenceReason: string;
  errorOther: string;
  errorFormStr: string;
  correctFormStr: string;

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    this.selectedOption = event.target.value;
  }

  checkInput() {
    if (
      this.absenceReason === undefined ||
      this.absenceReason.match(/^ *$/) !== null
    ) {
      this.errorOther = 'Wpisz poprawny powód nieobecności';
    } else {
      this.absenceList.push(this.absenceReason);
    }
  }

  sendForm(event) {
    if (this.selectedOption === undefined) {
      event.preventDefault();
      this.errorFormStr = 'Wybierz zmianę!';
    } else {
      this.correctFormStr = 'Formularz wysłany';
    }
  }
}
