import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProjectNameService } from './projectname.service';
import { GridOptions } from 'ag-grid';
import { IProjectName } from './projectname';

@Component({
    moduleId: module.id,
    templateUrl: 'list_projectnameeng.component.html'
})
export class List_ProjectNameengComponent implements OnInit {
  private Table_753GridOptions: GridOptions;

  private projectname: IProjectName = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

array_ProjectName :any [];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private projectnameservice: ProjectNameService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_753GridOptions = {
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

  ngOnInit() {/*
    if(!this.projectname.id)
    	this.mymodalSFU.open();*/
this.get_all_ProjectName();
  }


  get_all_ProjectName(){
      this.projectnameservice.get_all_ProjectName()
          .subscribe(data => {
            console.log("get_all_ProjectName done");
            //this.toastr.success('Success!');
            this.array_ProjectName =data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_ProjectName(){
      this.mymodalSFU.close();
      this.projectnameservice.search_for_update_ProjectName(this.projectname.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.projectname = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}