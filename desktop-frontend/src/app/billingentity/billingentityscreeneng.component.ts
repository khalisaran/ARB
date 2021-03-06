import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BillingEntityService } from './billingentity.service';
import { IBillingEntity } from './billingentity';

@Component({
    moduleId: module.id,
    templateUrl: 'billingentityscreeneng.component.html'
})
export class BillingEntityScreenengComponent implements OnInit {
  private billingentity: IBillingEntity = {
  	id: 0,
  	billname: '',
  	billdescription: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private billingentityservice: BillingEntityService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_BillingEntity(){
      this.billingentityservice.create_BillingEntity(this.billingentity)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_BillingEntity(){
      this.billingentityservice.get_all_BillingEntity()
          .subscribe(data => {
            console.log("data", data);
           // this.toastr.success('Success!',null,{toastLife: 5000});
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}