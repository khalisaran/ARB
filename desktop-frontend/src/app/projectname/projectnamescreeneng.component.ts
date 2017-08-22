import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProjectNameService } from './projectname.service';
import { IProjectName } from './projectname';

@Component({
    moduleId: module.id,
    templateUrl: 'projectnamescreeneng.component.html'
})
export class ProjectNameScreenengComponent implements OnInit {
  private projectname: IProjectName = {
  	id: 0,
  	name: '',
  	description: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private projectnameservice: ProjectNameService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_ProjectName(){
      this.projectnameservice.create_ProjectName(this.projectname)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_ProjectName(){
      this.projectnameservice.get_all_ProjectName()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}