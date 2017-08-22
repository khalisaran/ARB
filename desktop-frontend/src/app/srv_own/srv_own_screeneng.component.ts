import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Srv_ownService } from './srv_own.service';
import { ISrv_own } from './srv_own';

@Component({
    moduleId: module.id,
    templateUrl: 'srv_own_screeneng.component.html'
})
export class Srv_own_screenengComponent implements OnInit {
  private srv_own: ISrv_own = {
  	id: 0,
  	name: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private srv_ownservice: Srv_ownService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Srv_own(){
      this.srv_ownservice.create_Srv_own(this.srv_own)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Srv_own(){
      this.srv_ownservice.get_all_Srv_own()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}