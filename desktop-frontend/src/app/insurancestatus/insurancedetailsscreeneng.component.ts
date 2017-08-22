import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { InsuranceStatusService } from './insurancestatus.service';
import { IInsuranceStatus } from './insurancestatus';

@Component({
    moduleId: module.id,
    templateUrl: 'insurancedetailsscreeneng.component.html'
})
export class InsuranceDetailsScreenengComponent implements OnInit {
  private insurancestatus: IInsuranceStatus = {
  	id: 0,
  	insuransename: '',
  	insurancedescription: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private insurancestatusservice: InsuranceStatusService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_InsuranceStatus(){
      this.insurancestatusservice.create_InsuranceStatus(this.insurancestatus)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_InsuranceStatus(){
      this.insurancestatusservice.get_all_InsuranceStatus()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}