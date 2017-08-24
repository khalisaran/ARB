import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RoomService } from './room.service';
import { IRoom } from './room';

@Component({
    moduleId: module.id,
    templateUrl: 'roomscreeneng.component.html'
})
export class RoomScreenengComponent implements OnInit {
  private room: IRoom = {
  	id: 0,
  	name: '',
  	descriptoin: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private roomservice: RoomService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Room(){
      this.roomservice.create_Room(this.room)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Room(){
      this.roomservice.get_all_Room()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}