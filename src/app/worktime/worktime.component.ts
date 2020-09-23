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
  today: number = Date.now();

  constructor() {}

  ngOnInit(): void {}
}
