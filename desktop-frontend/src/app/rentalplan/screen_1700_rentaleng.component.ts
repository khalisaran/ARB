import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RentalPlanService } from './rentalplan.service';
import { IRentalPlan } from './rentalplan';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_1700_rentaleng.component.html'
})
export class Screen_1700_rentalengComponent implements OnInit {
  private rentalplan: IRentalPlan = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private rentalplanservice: RentalPlanService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_RentalPlan(){
      this.rentalplanservice.create_RentalPlan(this.rentalplan)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_RentalPlan(){
      this.rentalplanservice.get_all_RentalPlan()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}