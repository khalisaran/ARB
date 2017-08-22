import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { WarrantyStatusService } from './warrantystatus.service';
import { IWarrantyStatus } from './warrantystatus';

@Component({
    moduleId: module.id,
    templateUrl: 'warrantystatusscreeneng.component.html'
})
export class WarrantyStatusscreenengComponent implements OnInit {
  private warrantystatus: IWarrantyStatus = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private warrantystatusservice: WarrantyStatusService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_WarrantyStatus(){
      this.warrantystatusservice.create_WarrantyStatus(this.warrantystatus)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_WarrantyStatus(){
      this.warrantystatusservice.get_all_WarrantyStatus()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}