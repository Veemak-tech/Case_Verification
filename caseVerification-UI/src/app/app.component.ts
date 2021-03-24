import { Comments } from './classes/comments';
import { Component } from '@angular/core';
import {MockForm} from './shared/mock/mock-data'





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multikart-backend';

  data = MockForm;
  constructor (){
  }

}
