import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataTransferLimitService } from './datatransferlimit.service';
import { GridOptions } from 'ag-grid';
import { IDataTransferLimit } from './datatransferlimit';

@Component({
    moduleId: module.id,
    templateUrl: 'data_limit_list_screeneng.component.html'
})
export class Data_limit_list_screenengComponent implements OnInit {
  private Table_705GridOptions: GridOptions;

  private datatransferlimit: IDataTransferLimit = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;
array_DataTransferLimit : any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private datatransferlimitservice: DataTransferLimitService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_705GridOptions = {
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
   /* if(!this.datatransferlimit.id)
    	this.mymodalSFU.open();*/
      this.get_all_DataTransferLimit();

  }

 get_all_DataTransferLimit(){
      this.datatransferlimitservice.get_all_DataTransferLimit()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
this.array_DataTransferLimit = data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

  search_for_update_DataTransferLimit(){
      this.mymodalSFU.close();
      this.datatransferlimitservice.search_for_update_DataTransferLimit(this.datatransferlimit.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.datatransferlimit = data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}