import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AccessoriesService } from './accessories.service';
import { IAccessories } from './accessories';

@Component({
    moduleId: module.id,
    templateUrl: 'accessoriescreeneng.component.html'
})
export class AccessorieScreenengComponent implements OnInit {
  private accessories: IAccessories = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private accessoriesservice: AccessoriesService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Accessories(){
      this.accessoriesservice.create_Accessories(this.accessories)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Accessories(){
      this.accessoriesservice.get_all_Accessories()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}