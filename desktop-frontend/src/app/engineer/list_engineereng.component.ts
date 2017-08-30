import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EngineerService } from './engineer.service';
import { GridOptions } from 'ag-grid';
import { IEngineer } from './engineer';

@Component({
    moduleId: module.id,
    templateUrl: 'list_engineereng.component.html'
})
export class List_EngineerengComponent implements OnInit {
  private Table_1005GridOptions: GridOptions;

  private engineer: IEngineer = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

array_Engineer :any [];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private engineerservice: EngineerService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_1005GridOptions = {
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
   /* if(!this.engineer.id)
    	this.mymodalSFU.open();*/
      this.get_all_Engineer();

  }


  get_all_Engineer(){
      this.engineerservice.get_all_Engineer()
          .subscribe(data => {
            console.log("array_Engineer data returned");
           // this.toastr.success('Success!');
           this.array_Engineer =data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_Engineer(){
      this.mymodalSFU.close();
      this.engineerservice.search_for_update_Engineer(this.engineer.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.engineer = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}