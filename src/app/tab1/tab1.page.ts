import { Component } from '@angular/core';
import { Mydatas } from '../data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  mydatas = Mydatas;

  constructor() {}
}
