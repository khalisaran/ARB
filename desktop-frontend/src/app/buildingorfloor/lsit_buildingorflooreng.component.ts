import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BuildingOrFloorService } from './buildingorfloor.service';
import { GridOptions } from 'ag-grid';
import { IBuildingOrFloor } from './buildingorfloor';

@Component({
    moduleId: module.id,
    templateUrl: 'lsit_buildingorflooreng.component.html'
})
export class Lsit_BuildingOrFloorengComponent implements OnInit {
  private Table_803GridOptions: GridOptions;

  private buildingorfloor: IBuildingOrFloor = {
  	id: 0,
  	floorno: '',
  	name: '',
  	description: ''}
  ;

array_BuildingOrFloor :any [];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private buildingorfloorservice: BuildingOrFloorService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_803GridOptions = {
    	columnDefs: [
    		{
    			headerName: "Floorno",
    			field: "floorno",
    		},
    		{
    			headerName: "Name",
    			field: "name",
    		}
    	],
    	rowSelection: 'single',
    	onRowClicked: function(event) {
    		console.log('a row was clicked');
    	}
    };

  }

  ngOnInit() {
    this.get_all_BuildingOrFloor();
  }


  get_all_BuildingOrFloor(){
      this.buildingorfloorservice.get_all_BuildingOrFloor()
          .subscribe(data => {
            console.log("data", data);
            this.array_BuildingOrFloor =data;
            //this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}