import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformService } from './assetregisterbookform.service';
import { IAssetregisterbookform } from './assetregisterbookform';
import { CurrencyService } from './../currency/currency.service';
import { PoyearService } from './../poyear/poyear.service';
import { BillingEntityService } from './../billingentity/billingentity.service';
import { InvoiceVendorService } from './../invoicevendor/invoicevendor.service';

@Component({
    moduleId: module.id,
    templateUrl: 'invoicedetailsscreeneng.component.html'
})
export class InvoiceDetailsScreenengComponent implements OnInit {

private assetregisterbookform: IAssetregisterbookform;
  currency_list:any[];
  poyear_list:any[];
  billing_entity_list:any[];
  vendor_list:any[];

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, 
  private assetregisterbookformservice: AssetregisterbookformService,private currencyService:CurrencyService,private poyrservice:PoyearService,
  private billingEntityService:BillingEntityService,private invoicevendorService: InvoiceVendorService){ 
    this.toastr.setRootViewContainerRef(vcr);
	this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
  }

  ngOnInit() {
	  this.get_all_Currencies();
	  this.get_all_billingentities();
	  this.get_all_vendors();
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

    get_all_billingentities() {
        this.billingEntityService.get_all_BillingEntity().subscribe(data => {
          console.log('billing_entity_list'+JSON.stringify(data));      
            this.billing_entity_list = data;
          },
          err => {
            console.log('error', err);
          });
    }

    get_all_vendors() {
        this.invoicevendorService.get_all_InvoiceVendor().subscribe(data => {
          console.log('invoicevendorService'+JSON.stringify(data));      
            this.vendor_list = data;
          },
          err => {
            console.log('error', err);
          });
    }


}