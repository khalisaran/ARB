import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BuildingOrFloorService } from './buildingorfloor.service';
import { IBuildingOrFloor } from './buildingorfloor';

@Component({
    moduleId: module.id,
    templateUrl: 'buildingorfloorscreeneng.component.html'
})
export class BuildingOrFloorScreenengComponent implements OnInit {
  private buildingorfloor: IBuildingOrFloor = {
  	id: 0,
  	floorno: '',
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private buildingorfloorservice: BuildingOrFloorService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_BuildingOrFloor(){
      this.buildingorfloorservice.create_BuildingOrFloor(this.buildingorfloor)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_BuildingOrFloor(){
      this.buildingorfloorservice.get_all_BuildingOrFloor()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}