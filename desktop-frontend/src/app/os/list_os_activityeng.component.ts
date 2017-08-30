import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { OSService } from './os.service';
import { GridOptions } from 'ag-grid';
import { IOS } from './os';

@Component({
    moduleId: module.id,
    templateUrl: 'list_os_activityeng.component.html'
})
export class List_OS_ActivityengComponent implements OnInit {
  private Table_854GridOptions: GridOptions;

  private os: IOS = {
  	id: 0,
  	osname: '',
  	osdescription: ''}
  ;
array_OS :any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private osservice: OSService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_854GridOptions = {
    	columnDefs: [
    		{
    			headerName: "OSName",
    			field: "osname",
    		},
    		{
    			headerName: "OsDescription",
    			field: "osdescription",
    		}
    	],
    	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
    this.get_all_OS();
  }


  get_all_OS(){
      this.osservice.get_all_OS()
          .subscribe(data => {
            console.log("get_all_OS done");
            this.array_OS =data;
           // this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}