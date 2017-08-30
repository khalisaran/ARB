import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApplicationService } from './application.service';
import { GridOptions } from 'ag-grid';
import { IApplication } from './application';

@Component({
    moduleId: module.id,
    templateUrl: 'list_application_activityeng.component.html'
})
export class List_Application_ActivityengComponent implements OnInit {
  private Table_953GridOptions: GridOptions;

  private application: IApplication = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
array_Application : any [];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private applicationservice: ApplicationService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_953GridOptions = {
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
    this.get_all_Application();
  }


  get_all_Application(){
      this.applicationservice.get_all_Application()
          .subscribe(data => {
            console.log("array_Application is done");
            this.array_Application =data;
           // this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}