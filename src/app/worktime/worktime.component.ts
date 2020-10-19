import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { ActivatedRoute, Router } from '@angular/router';

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
  errorStr: string;
  errorFormStr: string;
  correctFormStr: string;

  workTimeFrom: string;
  workTimeTo: string;

  workChoices: string[] = ['od 7:30 do 15:30', 'od 8:30 do 16:30', 'inne'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }

  onChange(event) {
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
      this.errorFormStr = 'Wybierz zmianę!';
    } else {
      this.correctFormStr = 'Formularz wysłany';
      setTimeout(() => {
        this.reload();
      }, 3000);
    }
  }
}
