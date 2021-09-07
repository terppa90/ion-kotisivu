import { Component } from '@angular/core';
import { Studies } from '../data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  mystudies = Studies;

  constructor() {}
}
