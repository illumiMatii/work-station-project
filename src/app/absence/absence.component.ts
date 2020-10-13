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

  onChange(event) {
    this.selectedOption = event.target.value;
    this.absenceList.push(this.selectedOption);
  }

  constructor() {}

  ngOnInit(): void {}
}
