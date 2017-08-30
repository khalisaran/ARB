import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PoentityService } from './poentity.service';
import { GridOptions } from 'ag-grid';
import { IPoentity } from './poentity';

@Component({
    moduleId: module.id,
    templateUrl: 'list_poentity_activityeng.component.html'
})
export class List_Poentity_ActivityengComponent implements OnInit {
  private Table_1053GridOptions: GridOptions;

  private poentity: IPoentity = {
  	id: 0,
  	entityname: '',
  	entitydescription: ''}
  ;
array_Poentity :any [];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private poentityservice: PoentityService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_1053GridOptions = {
    	columnDefs: [
    		{
    			headerName: "EntityName",
    			field: "entityname",
    		},
    		{
    			headerName: "EntityDescription",
    			field: "entitydescription",
    		}
    	],
    	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
    this.get_all_Poentity();
  }


  get_all_Poentity(){
      this.poentityservice.get_all_Poentity()
          .subscribe(data => {
            console.log("get_all_Poentity is done");
            this.array_Poentity =data;
          //  this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}