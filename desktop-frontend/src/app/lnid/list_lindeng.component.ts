import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LNIDService } from './lnid.service';
import { GridOptions } from 'ag-grid';
import { ILNID } from './lnid';

@Component({
    moduleId: module.id,
    templateUrl: 'list_lindeng.component.html'
})
export class List_LINDengComponent implements OnInit {
  private Table_804GridOptions: GridOptions;

  private lnid: ILNID = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

array_LNID : any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private lnidservice: LNIDService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_804GridOptions = {
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
   /* if(!this.lnid.id)
    	this.mymodalSFU.open();*/

  }


  get_all_LNID(){
      this.lnidservice.get_all_LNID()
          .subscribe(data => {
            console.log("data", data);
            //this.toastr.success('Success!');
            this.array_LNID = data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_LNID(){
      this.mymodalSFU.close();
      this.lnidservice.search_for_update_LNID(this.lnid.id)
          .subscribe(data => {
            console.log("data", data);
          //  this.toastr.success('Success!');
            this.lnid = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}