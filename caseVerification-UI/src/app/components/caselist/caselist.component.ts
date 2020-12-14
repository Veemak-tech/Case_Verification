import { CaseverificationService } from './../../caseverification.service';
import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';

@Component({
  selector: 'app-caselist',
  templateUrl: './caselist.component.html',
  styleUrls: ['./caselist.component.scss']
})
export class CaselistComponent implements OnInit {
  title = 'blog';

  any=[];
  data: Object;

  constructor(private casedetails:CaseverificationService) {
    this.casedetails.getData().subscribe(result=>{
      console.warn(result)
  this.data=result;
    })
   }

  ngOnInit(): void {
  }



  // openEdit(targetModal: any, postjobs: Data) {
  //   this.modalService.open(targetModal, {
  //     backdrop: 'static',
  //     size: 'lg',
  //   });
  //   this.editForm.patchValue({
  //     JobNo: postjobs.JobNo,
  //     JobTitle: postjobs.JobTitle,
  //     CompanyName: postjobs.CompanyName,
  //     Location: postjobs.Location,
  //     ShortDescription: postjobs.ShortDescription,
  //     FullDescription: postjobs.FullDescription,
  //     JobNature: postjobs.JobNature,
  //     SalaryRange: postjobs.SalaryRange,
  //   });
  // }
  // onSave() {
  //   const editUrl = 'http://localhost:3500/postjobs';
  //   console.log(this.editForm.value);
  //   this.httpClient
  //     .put(editUrl, this.editForm.value, { withCredentials: false })
  //     .subscribe((results) => {
  //       this.ngOnInit();
  //       this.modalService.dismissAll();
  //     });
  // }
}
