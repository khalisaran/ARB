import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformService } from './assetregisterbookform.service';
import { IAssetregisterbookform } from './assetregisterbookform';
import { PoentityService } from './../poentity/poentity.service';
import { CurrencyService } from './../currency/currency.service';
import { PoyearService } from './../poyear/poyear.service';
import { BillingEntityService } from './../billingentity/billingentity.service';
import { InvoiceVendorService } from './../invoicevendor/invoicevendor.service';

@Component({
    moduleId: module.id,
    templateUrl: 'purchaseorderdetailsscreeneng.component.html'
})
export class PurchaseOrderDetailsScreenengComponent implements OnInit {
  
   private assetregisterbookform: IAssetregisterbookform;
	poentity_list : any[];
    selected_poentity : any;
	currency_list:any[];
  poyear_list:any[];

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, 
  private assetregisterbookformservice: AssetregisterbookformService,
  private poenetityservice:PoentityService,private currencyService:CurrencyService,private poyrservice:PoyearService,
  private billingEntityService:BillingEntityService,private invoicevendorService: InvoiceVendorService) {

    this.toastr.setRootViewContainerRef(vcr);
	this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
	
  }

  ngOnInit() {
	  this.get_all_Poentities();
	  this.get_all_Currencies();
    this.get_all_Poyears();
    //this.get_all_billingentities();
    //this.get_all_vendors();
  }

      get_all_Poyears() {
        this.poyrservice.get_all_Poyear().subscribe(data => {
          console.log('data'+JSON.stringify(data));      
            this.poyear_list = data;
          },
          err => {
            console.log('error', err);
          });
    }


get_all_Currencies() {
        this.currencyService.get_all_Currency().subscribe(data => {
            console.log('data'+JSON.stringify(data));                       
            this.currency_list = data;
          },
          err => {
            console.log('error', err);
          });
    }
get_all_Poentities() {
        this.poenetityservice.get_all_Poentity().subscribe(data => {
            this.poentity_list = data;
          },
          err => {
            console.log('error', err);
          });
    }


}