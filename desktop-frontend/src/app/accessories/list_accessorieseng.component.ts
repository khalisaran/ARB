import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AccessoriesService } from './accessories.service';
import { GridOptions } from 'ag-grid';
import { IAccessories } from './accessories';

@Component({
    moduleId: module.id,
    templateUrl: 'list_accessorieseng.component.html'
})
export class List_AccessoriesengComponent implements OnInit {
  private Table_1105GridOptions: GridOptions;

  private accessories: IAccessories = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

array_Accessories : any [];

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private accessoriesservice: AccessoriesService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_1105GridOptions = {
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
   /* if(!this.accessories.id)
    	this.mymodalSFU.open();*/

  }


  get_all_Accessories(){
      this.accessoriesservice.get_all_Accessories()
          .subscribe(data => {
            console.log("get_all_Accessories data returned");
            this.array_Accessories = data;
           // this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_Accessories(){
      this.mymodalSFU.close();
      this.accessoriesservice.search_for_update_Accessories(this.accessories.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.accessories = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}