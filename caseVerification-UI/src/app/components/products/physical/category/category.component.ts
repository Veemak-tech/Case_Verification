import { Component, OnInit } from '@angular/core';
import { CasedetailsService } from 'src/app/services/casedetails.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// const URL = 'http://localhost:3000/upload';

// function readBase64(file): Promise<any> {
//   var reader  = new FileReader();
//   var future = new Promise((resolve, reject) => {
//     reader.addEventListener("load", function () {
//       resolve(reader.result);
//     }, false);

//     reader.addEventListener("error", function (event) {
//       reject(event);
//     }, false);

//     reader.readAsDataURL(file);
//   });
//   return future;
// }

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private casedetailservice: CasedetailsService) { }

  ngOnInit(): void {
    this.fileInfos = this.casedetailservice.getFiles();
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.casedetailservice.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.casedetailservice.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
}
