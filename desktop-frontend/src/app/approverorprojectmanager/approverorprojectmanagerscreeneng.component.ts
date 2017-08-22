import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApproverOrProjectManagerService } from './approverorprojectmanager.service';
import { IApproverOrProjectManager } from './approverorprojectmanager';

@Component({
    moduleId: module.id,
    templateUrl: 'approverorprojectmanagerscreeneng.component.html'
})
export class ApproverOrProjectManagerScreenengComponent implements OnInit {
  private approverorprojectmanager: IApproverOrProjectManager = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private approverorprojectmanagerservice: ApproverOrProjectManagerService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_ApproverOrProjectManager(){
      this.approverorprojectmanagerservice.create_ApproverOrProjectManager(this.approverorprojectmanager)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_ApproverOrProjectManager(){
      this.approverorprojectmanagerservice.get_all_ApproverOrProjectManager()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}