import { Component } from '@angular/core';
import { Hobbies } from '../data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  myhobbies = Hobbies;

  constructor() {}
}
