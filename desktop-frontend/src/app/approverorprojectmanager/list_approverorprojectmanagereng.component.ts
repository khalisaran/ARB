import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApproverOrProjectManagerService } from './approverorprojectmanager.service';
import { GridOptions } from 'ag-grid';
import { IApproverOrProjectManager } from './approverorprojectmanager';

@Component({
    moduleId: module.id,
    templateUrl: 'list_approverorprojectmanagereng.component.html'
})
export class List_ApproverOrProjectManagerengComponent implements OnInit {
  private Table_701GridOptions: GridOptions;

  private approverorprojectmanager: IApproverOrProjectManager = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;
array_ApproverOrProjectManager :any [];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private approverorprojectmanagerservice: ApproverOrProjectManagerService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_701GridOptions = {
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
   /* if(!this.approverorprojectmanager.id)
    	this.mymodalSFU.open();*/
      this.get_all_ApproverOrProjectManager();

  }


  get_all_ApproverOrProjectManager(){
      this.approverorprojectmanagerservice.get_all_ApproverOrProjectManager()
          .subscribe(data => {
            console.log("get_all_ApproverOrProjectManager done");
            this.array_ApproverOrProjectManager =data;
           // this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_ApproverOrProjectManager(){
      this.mymodalSFU.close();
      this.approverorprojectmanagerservice.search_for_update_ApproverOrProjectManager(this.approverorprojectmanager.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.approverorprojectmanager = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}