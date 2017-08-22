import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformService } from './assetregisterbookform.service';
import { IAssetregisterbookform } from './assetregisterbookform';

@Component({
    moduleId: module.id,
    templateUrl: 'audittrailscreeneng.component.html'
})
export class AuditTrailScreenengComponent implements OnInit {
  private assetregisterbookform: IAssetregisterbookform ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private assetregisterbookformservice: AssetregisterbookformService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
  }

  ngOnInit() {
  }


  create_Assetregisterbookform(){
      this.assetregisterbookformservice.create_Assetregisterbookform(this.assetregisterbookform)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Assetregisterbookform(){
      this.assetregisterbookformservice.get_all_Assetregisterbookform()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}