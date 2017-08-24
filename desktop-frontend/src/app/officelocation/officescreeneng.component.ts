import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { OfficeLocationService } from './officelocation.service';
import { IOfficeLocation } from './officelocation';

@Component({
    moduleId: module.id,
    templateUrl: 'officescreeneng.component.html'
})
export class OfficeScreenengComponent implements OnInit {
  private officelocation: IOfficeLocation = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private officelocationservice: OfficeLocationService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_OfficeLocation(){
      this.officelocationservice.create_OfficeLocation(this.officelocation)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_OfficeLocation(){
      this.officelocationservice.get_all_OfficeLocation()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}