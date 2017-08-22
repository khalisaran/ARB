import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Srv_admService } from './srv_adm.service';
import { ISrv_adm } from './srv_adm';

@Component({
    moduleId: module.id,
    templateUrl: 'srv_adm_screeneng.component.html'
})
export class Srv_adm_ScreenengComponent implements OnInit {
  private srv_adm: ISrv_adm = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private srv_admservice: Srv_admService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Srv_adm(){
      this.srv_admservice.create_Srv_adm(this.srv_adm)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Srv_adm(){
      this.srv_admservice.get_all_Srv_adm()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}