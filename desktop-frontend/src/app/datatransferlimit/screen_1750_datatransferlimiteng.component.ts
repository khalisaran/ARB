import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataTransferLimitService } from './datatransferlimit.service';
import { IDataTransferLimit } from './datatransferlimit';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_1750_datatransferlimiteng.component.html'
})
export class Screen_1750_DataTransferLimitengComponent implements OnInit {
  private datatransferlimit: IDataTransferLimit = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private datatransferlimitservice: DataTransferLimitService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_DataTransferLimit(){
      this.datatransferlimitservice.create_DataTransferLimit(this.datatransferlimit)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_DataTransferLimit(){
      this.datatransferlimitservice.get_all_DataTransferLimit()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}