import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserAllocationStatusService } from './userallocationstatus.service';
import { IUserAllocationStatus } from './userallocationstatus';

@Component({
    moduleId: module.id,
    templateUrl: 'userallocationstatusscreeneng.component.html'
})
export class UserAllocationStatusScreenengComponent implements OnInit {
  private userallocationstatus: IUserAllocationStatus = {
  	id: 0,
  	name: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private userallocationstatusservice: UserAllocationStatusService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_UserAllocationStatus(){
      this.userallocationstatusservice.create_UserAllocationStatus(this.userallocationstatus)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_UserAllocationStatus(){
      this.userallocationstatusservice.get_all_UserAllocationStatus()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}