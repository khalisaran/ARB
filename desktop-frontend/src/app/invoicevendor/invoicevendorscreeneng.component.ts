import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { InvoiceVendorService } from './invoicevendor.service';
import { IInvoiceVendor } from './invoicevendor';

@Component({
    moduleId: module.id,
    templateUrl: 'invoicevendorscreeneng.component.html'
})
export class InvoiceVendorScreenengComponent implements OnInit {
  private invoicevendor: IInvoiceVendor = {
  	id: 0,
  	vendorname: '',
  	vendordescription: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private invoicevendorservice: InvoiceVendorService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_InvoiceVendor(){
      this.invoicevendorservice.create_InvoiceVendor(this.invoicevendor)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_InvoiceVendor(){
      this.invoicevendorservice.get_all_InvoiceVendor()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}