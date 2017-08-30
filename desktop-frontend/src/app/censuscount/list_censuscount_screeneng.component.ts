import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CensusCountService } from './censuscount.service';
import { GridOptions } from 'ag-grid';
import { ICensusCount } from './censuscount';

@Component({
    moduleId: module.id,
    templateUrl: 'list_censuscount_screeneng.component.html'
})
export class List_CensusCount_screenengComponent implements OnInit {
  private Table_854GridOptions: GridOptions;

  private censuscount: ICensusCount = {
  	id: 0,
  	name: '',
  	description: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;
array_censuscount : any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private censuscountservice: CensusCountService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_854GridOptions = {
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
  /*  if(!this.censuscount.id)
    	this.mymodalSFU.open();*/
      this.get_all_CensusCount();

  }


  get_all_CensusCount(){
      this.censuscountservice.get_all_CensusCount()
          .subscribe(data => {
            console.log("data", data);
           // this.toastr.success('Success!');
           this.array_censuscount = data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_CensusCount(){
    //  this.mymodalSFU.close();
      this.censuscountservice.search_for_update_CensusCount(this.censuscount.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.censuscount = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}