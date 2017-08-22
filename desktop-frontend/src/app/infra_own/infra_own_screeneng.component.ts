import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Infra_ownService } from './infra_own.service';
import { IInfra_own } from './infra_own';

@Component({
    moduleId: module.id,
    templateUrl: 'infra_own_screeneng.component.html'
})
export class Infra_own_screenengComponent implements OnInit {
  private infra_own: IInfra_own = {
  	id: 0,
  	name: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private infra_ownservice: Infra_ownService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Infra_own(){
      this.infra_ownservice.create_Infra_own(this.infra_own)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Infra_own(){
      this.infra_ownservice.get_all_Infra_own()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}