import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BillingEntityService } from './billingentity.service';
import { GridOptions } from 'ag-grid';
import { IBillingEntity } from './billingentity';

@Component({
    moduleId: module.id,
    templateUrl: 'list_billingentity_activityeng.component.html'
})
export class List_BillingEntity_ActivityengComponent implements OnInit {
  private Table_1253GridOptions: GridOptions;

  private billingentity: IBillingEntity = {
  	id: 0,
  	billname: '',
  	billdescription: ''}
  ;
array_BillingEntity :any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private billingentityservice: BillingEntityService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_1253GridOptions = {
    	columnDefs: [
    		{
    			headerName: "BillName",
    			field: "billname",
    		},
    		{
    			headerName: "BillDescription",
    			field: "billdescription",
    		}
    	],
    	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
  
  this.get_all_BillingEntity();
}


  get_all_BillingEntity(){
      this.billingentityservice.get_all_BillingEntity()
          .subscribe(data => {
            console.log("array_BillingEntity is done");
            this.array_BillingEntity =data;
          //  this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}