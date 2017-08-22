import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ReasonForNotCountService } from './reasonfornotcount.service';
import { IReasonForNotCount } from './reasonfornotcount';

@Component({
    moduleId: module.id,
    templateUrl: 'reasonfornotcount_screeneng.component.html'
})
export class ReasonForNotCount_screenengComponent implements OnInit {
  private reasonfornotcount: IReasonForNotCount = {
  	id: 0,
  	reason: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private reasonfornotcountservice: ReasonForNotCountService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_ReasonForNotCount(){
      this.reasonfornotcountservice.create_ReasonForNotCount(this.reasonfornotcount)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_ReasonForNotCount(){
      this.reasonfornotcountservice.get_all_ReasonForNotCount()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}