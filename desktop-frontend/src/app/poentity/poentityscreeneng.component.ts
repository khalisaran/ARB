import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PoentityService } from './poentity.service';
import { IPoentity } from './poentity';

@Component({
    moduleId: module.id,
    templateUrl: 'poentityscreeneng.component.html'
})
export class PoEntityScreenengComponent implements OnInit {
  private poentity: IPoentity = {
  	id: 0,
  	entityname: '',
  	entitydescription: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private poentityservice: PoentityService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Poentity(){
      this.poentityservice.create_Poentity(this.poentity)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.'+error,'Error!');
          });
  }
  get_all_Poentity(){
      this.poentityservice.get_all_Poentity()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}