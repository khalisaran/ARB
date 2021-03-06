import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformService } from './assetregisterbookform.service';
import { IAssetregisterbookform } from './assetregisterbookform';

@Component({
    moduleId: module.id,
    templateUrl: 'insurancedetailscreeneng.component.html'
})
export class InsuranceDetailScreenengComponent implements OnInit {
  private assetregisterbookform: IAssetregisterbookform ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private assetregisterbookformservice: AssetregisterbookformService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
  }

  ngOnInit() {
  }



}