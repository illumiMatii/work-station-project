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

  selectedOption: string;
  messageStr: string;

  workChoices: string[] = ['od 7:30 do 15:30', 'od 8:30 do 16:30', 'inne'];

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    this.selectedOption = event.target.value;
  }

  isHomeOffice(event) {
    this.homeOffice = !this.homeOffice;
  }

  checkInputs(from: string, to: string, event: any) {
    if (from === '' || to === '') {
      event.preventDefault();
      this.messageStr = 'Podaj poprawne wartości';
    } else {
      this.messageStr = '';
      let option = 'od ' + from + ' do ' + to;
      this.workChoices.push(option);
    }
  }
}
