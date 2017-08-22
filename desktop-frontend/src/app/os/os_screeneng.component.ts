import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { OSService } from './os.service';
import { IOS } from './os';

@Component({
    moduleId: module.id,
    templateUrl: 'os_screeneng.component.html'
})
export class OS_ScreenengComponent implements OnInit {
  private os: IOS = {
  	id: 0,
  	osname: '',
  	osdescription: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private osservice: OSService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_OS(){
      this.osservice.create_OS(this.os)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_OS(){
      this.osservice.get_all_OS()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}