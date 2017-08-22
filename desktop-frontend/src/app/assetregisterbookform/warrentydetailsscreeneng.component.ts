import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformService } from './assetregisterbookform.service';
import { IAssetregisterbookform } from './assetregisterbookform';
import { WarrantyStatusService } from './../warrantystatus/warrantystatus.service';


@Component({
    moduleId: module.id,
    templateUrl: 'warrentydetailsscreeneng.component.html'
})
export class WarrentyDetailsScreenengComponent implements OnInit {
  private assetregisterbookform: IAssetregisterbookform;
   status_list:any[];

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, 
  private assetregisterbookformservice: AssetregisterbookformService,private warrantyStatusService:WarrantyStatusService) { 
    this.toastr.setRootViewContainerRef(vcr);
	this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
  }



  ngOnInit() {
	  this.get_all_WarrantyStatus();
  }


      get_all_WarrantyStatus() {
        this.warrantyStatusService.get_all_WarrantyStatus().subscribe(data => {
          console.log('data'+JSON.stringify(data));      
            this.status_list = data;
          },
          err => {
            console.log('error', err);
          });
    }



}