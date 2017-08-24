import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { IdentityService } from './identity.service';
import { IIdentity } from './identity';

@Component({
    moduleId: module.id,
    templateUrl: 'identityscreeneng.component.html'
})
export class IdentityScreenengComponent implements OnInit {
  private identity: IIdentity = {
  	id: 0,
  	name: '',
  	decription: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private identityservice: IdentityService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Identity(){
      this.identityservice.create_Identity(this.identity)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Identity(){
      this.identityservice.get_all_Identity()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}