import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ReasonForNotCountService } from './reasonfornotcount.service';
import { GridOptions } from 'ag-grid';
import { IReasonForNotCount } from './reasonfornotcount';

@Component({
    moduleId: module.id,
    templateUrl: 'list_reasonfornotcount_screeneng.component.html'
})
export class List_ReasonForNotCount_screenengComponent implements OnInit {
  private Table_905GridOptions: GridOptions;

  private reasonfornotcount: IReasonForNotCount = {
  	id: 0,
  	reason: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

array_ReasonForNotCount : any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private reasonfornotcountservice: ReasonForNotCountService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_905GridOptions = {
    	columnDefs: [
    		{
    			headerName: "Reason",
    			field: "reason",
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
   /* if(!this.reasonfornotcount.id)
    	this.mymodalSFU.open();*/

  }


  get_all_ReasonForNotCount(){
      this.reasonfornotcountservice.get_all_ReasonForNotCount()
          .subscribe(data => {
            this.array_ReasonForNotCount =data;
            console.log("get_all_ReasonForNotCount data returned");
           // this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_ReasonForNotCount(){
    //  this.mymodalSFU.close();
      this.reasonfornotcountservice.search_for_update_ReasonForNotCount(this.reasonfornotcount.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.reasonfornotcount = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}