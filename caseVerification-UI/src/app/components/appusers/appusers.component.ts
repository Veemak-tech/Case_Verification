import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import {ClassicEditor} from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-appusers',
  templateUrl: './appusers.component.html',
  styleUrls: ['./appusers.component.scss']
})
export class AppusersComponent implements OnInit {

  public Editor = ClassicEditor;

    constructor() { }

    public config1: DropzoneConfigInterface = {
      clickable: true,
      maxFiles: 1,
      autoReset: null,
      errorReset: null,
      cancelReset: null
    };

    public onUploadInit(args: any): void { }

    public onUploadError(args: any): void { }

    public onUploadSuccess(args: any): void { }

    ngOnInit() {
    }

  }
