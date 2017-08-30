import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RentalPlanService } from './rentalplan.service';
import { GridOptions } from 'ag-grid';
import { IRentalPlan } from './rentalplan';

@Component({
    moduleId: module.id,
    templateUrl: 'rental_plan_listeng.component.html'
})
export class Rental_plan_listengComponent implements OnInit {
  private Table_657GridOptions: GridOptions;

  private rentalplan: IRentalPlan = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;
   array_RentalPlan :any [];

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private rentalplanservice: RentalPlanService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_657GridOptions = {
    	columnDefs: [
    		{
    			headerName: "Name",
    			field: "name",
    		},
    		{
    			headerName: "Description",
    			field: "description",
    		}
    	],
    	rowSelection: 'single',
    };

  }

  ngOnInit() {
   /* if(!this.rentalplan.id)
    	this.mymodalSFU.open();*/

  }


  get_all_RentalPlan(){
      this.rentalplanservice.get_all_RentalPlan()
          .subscribe(data => {
            console.log("get_all_RentalPlan data returned");
            this.array_RentalPlan =data;
            //this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_RentalPlan(){
     // this.mymodalSFU.close();
      this.rentalplanservice.search_for_update_RentalPlan(this.rentalplan.id)
          .subscribe(data => {
            console.log("data", data);
          //  this.toastr.success('Success!');
            this.rentalplan = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}