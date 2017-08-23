import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SgService } from './sg.service';
import { ISg } from './sg';

@Component({
    moduleId: module.id,
    templateUrl: 'sg_screeneng.component.html'
})
export class Sg_ScreenengComponent implements OnInit {
  private sg: ISg = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private sgservice: SgService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
   /* if(!this.sg.id)
    	this.mymodalSFU.open();*/


  }


  create_Sg(){
      this.sgservice.create_Sg(this.sg)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  delete_Sg(){
      this.sgservice.delete_Sg(this.sg)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_Sg(){
      this.mymodalSFU.close();
      this.sgservice.search_for_update_Sg(this.sg.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.sg = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Sg(){
      this.sgservice.get_all_Sg()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}