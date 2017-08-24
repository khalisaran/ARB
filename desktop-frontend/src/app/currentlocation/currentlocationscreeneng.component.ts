import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CurrentLocationService } from './currentlocation.service';
import { ICurrentLocation } from './currentlocation';

@Component({
    moduleId: module.id,
    templateUrl: 'currentlocationscreeneng.component.html'
})
export class CurrentLocationScreenengComponent implements OnInit {
  private currentlocation: ICurrentLocation = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private currentlocationservice: CurrentLocationService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_CurrentLocation(){
      this.currentlocationservice.create_CurrentLocation(this.currentlocation)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_CurrentLocation(){
      this.currentlocationservice.get_all_CurrentLocation()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}