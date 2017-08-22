import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CensusCountService } from './censuscount.service';
import { ICensusCount } from './censuscount';

@Component({
    moduleId: module.id,
    templateUrl: 'censuscount_screeneng.component.html'
})
export class CensusCount_screenengComponent implements OnInit {
  private censuscount: ICensusCount = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private censuscountservice: CensusCountService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_CensusCount(){
      this.censuscountservice.create_CensusCount(this.censuscount)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_CensusCount(){
      this.censuscountservice.get_all_CensusCount()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}