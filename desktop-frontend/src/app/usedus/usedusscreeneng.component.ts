import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UsedUsService } from './usedus.service';
import { IUsedUs } from './usedus';

@Component({
    moduleId: module.id,
    templateUrl: 'usedusscreeneng.component.html'
})
export class UsedusscreenengComponent implements OnInit {
  private usedus: IUsedUs = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private usedusservice: UsedUsService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_UsedUs(){
      this.usedusservice.create_UsedUs(this.usedus)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_UsedUs(){
      this.usedusservice.get_all_UsedUs()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}