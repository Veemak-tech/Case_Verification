import { Comments } from './classes/comments';
import { FreeapiserviceService } from './services/freeapiservice.service';
import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multikart-backend';

  constructor (private _FreeapiserviceService: FreeapiserviceService){
  }

    lstcomments:Comments[];
  ngOnInit(){
    this._FreeapiserviceService.getcomments()
    .subscribe(
      data=> {
        this.lstcomments = data;
      }
    );
  }
}
