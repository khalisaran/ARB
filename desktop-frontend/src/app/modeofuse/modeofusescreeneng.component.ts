import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ModeOfUseService } from './modeofuse.service';
import { IModeOfUse } from './modeofuse';

@Component({
    moduleId: module.id,
    templateUrl: 'modeofusescreeneng.component.html'
})
export class ModeOfUseScreenengComponent implements OnInit {
  private modeofuse: IModeOfUse = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private modeofuseservice: ModeOfUseService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_ModeOfUse(){
      this.modeofuseservice.create_ModeOfUse(this.modeofuse)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_ModeOfUse(){
      this.modeofuseservice.get_all_ModeOfUse()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}