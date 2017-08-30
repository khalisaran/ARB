import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PoyearService } from './poyear.service';
import { GridOptions } from 'ag-grid';
import { IPoyear } from './poyear';

@Component({
    moduleId: module.id,
    templateUrl: 'list_poyear_activityeng.component.html'
})
export class List_Poyear_ActivityengComponent implements OnInit {
  private Table_1003GridOptions: GridOptions;

  private poyear: IPoyear = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
array_Poyear :any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private poyearservice: PoyearService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_1003GridOptions = {
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
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
    this.get_all_Poyear();
  }


  get_all_Poyear(){
      this.poyearservice.get_all_Poyear()
          .subscribe(data => {
            console.log("array_Poyear is done");
            this.array_Poyear =data;
            //this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}