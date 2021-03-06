import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EngineerService } from './engineer.service';
import { IEngineer } from './engineer';

@Component({
    moduleId: module.id,
    templateUrl: 'engineerscreeneng.component.html'
})
export class EngineerScreenengComponent implements OnInit {
  private engineer: IEngineer = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private engineerservice: EngineerService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Engineer(){
      this.engineerservice.create_Engineer(this.engineer)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Engineer(){
      this.engineerservice.get_all_Engineer()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}