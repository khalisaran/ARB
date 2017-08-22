import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CurrencyService } from './currency.service';
import { ICurrency } from './currency';

@Component({
    moduleId: module.id,
    templateUrl: 'currencyscreeneng.component.html'
})
export class CurrencyScreenengComponent implements OnInit {
  private currency: ICurrency = {
  	id: 0,
  	currenyname: '',
  	currenydescription: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private currencyservice: CurrencyService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Currency(){
      this.currencyservice.create_Currency(this.currency)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  get_all_Currency(){
      this.currencyservice.get_all_Currency()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}