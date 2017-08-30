import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CategoryService } from './category.service';
import { GridOptions } from 'ag-grid';
import { ICategory } from './category';

@Component({
    moduleId: module.id,
    templateUrl: 'list_category_activityeng.component.html'
})
export class List_Category_ActivityengComponent implements OnInit {
  private Table_902GridOptions: GridOptions;

  private category: ICategory = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
array_Category :any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private categoryservice: CategoryService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_902GridOptions = {
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
    this.get_all_Category();
  }


  get_all_Category(){
      this.categoryservice.get_all_Category()
          .subscribe(data => {
            console.log("array_Category done", data);
           // this.toastr.success('Success!');
           this.array_Category =data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}