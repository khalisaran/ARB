import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AllocatedFromService } from './allocatedfrom.service';
import { IAllocatedFrom } from './allocatedfrom';

@Component({
    moduleId: module.id,
    templateUrl: 'allocatedfromscreeneng.component.html'
})
export class AllocatedFromScreenengComponent implements OnInit {
  private allocatedfrom: IAllocatedFrom = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private allocatedfromservice: AllocatedFromService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_AllocatedFrom(){
      this.allocatedfromservice.create_AllocatedFrom(this.allocatedfrom)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_AllocatedFrom(){
      this.allocatedfromservice.get_all_AllocatedFrom()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}