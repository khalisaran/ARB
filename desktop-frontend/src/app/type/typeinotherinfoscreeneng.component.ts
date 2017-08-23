import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TypeService } from './type.service';
import { IType } from './type';

@Component({
    moduleId: module.id,
    templateUrl: 'typeinotherinfoscreeneng.component.html'
})
export class TypeinOtherinfoScreenengComponent implements OnInit {
  private type: IType = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private typeservice: TypeService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Type(){
      this.typeservice.create_Type(this.type)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Type(){
      this.typeservice.get_all_Type()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}