import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ModeOfUseService } from './modeofuse.service';
import { GridOptions } from 'ag-grid';
import { IModeOfUse } from './modeofuse';

@Component({
    moduleId: module.id,
    templateUrl: 'list_modeofuseeng.component.html'
})
export class List_ModeOfUseengComponent implements OnInit {
  private Table_955GridOptions: GridOptions;

  private modeofuse: IModeOfUse = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

array_ModeOfUse : any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private modeofuseservice: ModeOfUseService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_955GridOptions = {
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
    /*if(!this.modeofuse.id)
    	this.mymodalSFU.open();*/

  }


  get_all_ModeOfUse(){
      this.modeofuseservice.get_all_ModeOfUse()
          .subscribe(data => {
            console.log("get_all_ModeOfUse data returned");
            //this.toastr.success('Success!');
            this.array_ModeOfUse = data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_ModeOfUse(){
      this.mymodalSFU.close();
      this.modeofuseservice.search_for_update_ModeOfUse(this.modeofuse.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.modeofuse = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}