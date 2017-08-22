import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformService } from './assetregisterbookform.service';
import { IAssetregisterbookform } from './assetregisterbookform';
import { PoentityService } from './../poentity/poentity.service';
import { CurrencyService } from './../currency/currency.service';
import { PoyearService } from './../poyear/poyear.service';
import { BillingEntityService } from './../billingentity/billingentity.service';
import { InvoiceVendorService } from './../invoicevendor/invoicevendor.service';
import { UserAllocationStatusService } from './../userallocationstatus/userallocationstatus.service';
import { UsedUsService } from './../usedus/usedus.service';
import { RentalPlanService } from './../rentalplan/rentalplan.service';
import { DataTransferLimitService } from './../datatransferlimit/datatransferlimit.service';
import { CensusCountService } from './../censuscount/censuscount.service';
import { ReasonForNotCountService } from './../reasonfornotcount/reasonfornotcount.service';
import { ModeOfUseService } from './../modeofuse/modeofuse.service';
import { ApproverOrProjectManagerService } from './../approverorprojectmanager/approverorprojectmanager.service';
import { EngineerService } from './../engineer/engineer.service';
import { ProjectNameService } from './../projectname/projectname.service';
import { AccessoriesService } from './../accessories/accessories.service';
import { AllocatedFromService } from './../allocatedfrom/allocatedfrom.service';
import { BuildingOrFloorService } from './../buildingorfloor/buildingorfloor.service';
import { CategoryService } from './../category/category.service';
import { ApplicationService } from './../application/application.service';
import { Srv_admService } from './../srv_adm/srv_adm.service';
import { Srv_ownService } from './../srv_own/srv_own.service';
import { Infra_ownService } from './../infra_own/infra_own.service';
import { InsuranceStatusService } from './../insurancestatus/insurancestatus.service';
import { WarrantyStatusService } from './../warrantystatus/warrantystatus.service';

@Component({
    moduleId: module.id,
    templateUrl: 'mainscreeneng.component.html'
})
export class MainScreenengComponent implements OnInit {
 
	private assetregisterbookform: IAssetregisterbookform;
	poentity_list : any[];
	currency_list:any[];
  poyear_list:any[];
  user_allocation_status_list:any[];
  usedas_list:any[];
  rentalplan_list:any[];
  datatransferlimit_type:any[];
  censuscount_list:any[];
  reasonfornotcount_list:any[];
  modeofuse_list: any[];
  manager_list:any[];
  engineer_list:any[];
  projectname_list:any[];
  accessories_list:any[];
  allocatedfrom_list:any[];
  buildingorflorr_list:any[];
  category_list:any[];
  application_list:any[];
  srv_adm_list:any[];
  srv_own_list:any[];
  infra_own_list:any[];
  billingentity_list:any[];
  vendor_list:any[];
  invoi_status_list:any[];
  warstatus_list:any[];
 

  constructor(private router: Router,private route: ActivatedRoute, public toastr: ToastsManager, vcr: ViewContainerRef, private assetregisterbookformservice: AssetregisterbookformService,
   private poenetityservice:PoentityService,private currencyService:CurrencyService,private poyrservice:PoyearService,
   private billingentityservice:BillingEntityService,private invoicevendorservice: InvoiceVendorService,private userAllocationService:UserAllocationStatusService
   ,private usedusservice:UsedUsService, private rentalplanservice: RentalPlanService,private datatransferlimitservice: DataTransferLimitService,
   private censuscountservice: CensusCountService, private reasonfornotcountservice: ReasonForNotCountService,
   private modeofuseservice: ModeOfUseService,private approverorprojectmanagerservice: ApproverOrProjectManagerService,
   private engineerservice: EngineerService,private projectnameservice: ProjectNameService,
   private accessoriesservice: AccessoriesService,private allocatedfromservice: AllocatedFromService,
   private buildingorfloorservice: BuildingOrFloorService,private categoryservice: CategoryService,
   private applicationservice: ApplicationService, private srv_admservice: Srv_admService,private srv_ownservice: Srv_ownService, private infra_ownservice: Infra_ownService
  ,private insurancestatusservice: InsuranceStatusService, private warrantystatusservice: WarrantyStatusService) {

    this.toastr.setRootViewContainerRef(vcr);
	  this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
          let state = params['id'];
          if(state!=undefined){
            this.assetregisterbookformservice.IAssetregisterbookform = null;
            this.assetregisterbookform = null;
          }
        });

	     this.get_all_Poentities();
	     this.get_all_Currencies();
         this.get_all_Poyears();
         this.get_all_UserallocationStatus();
         this.get_all_Usedas();
         this.get_all_RentalPlan();
         this.get_all_DataTransferLimit();
         this.get_all_CensusCount();
         this.get_all_ReasonForNotCount();
         this.get_all_ModeOfUse();
         this.get_all_ApproverOrProjectManager();
         this.get_all_Engineer();
         this.get_all_ProjectName();
         this.get_all_Accessories();
         this.get_all_AllocatedFrom();
         this.get_all_BuildingOrFloor();
         this.get_all_Category();
         this.get_all_Application();
         this.get_all_Srv_adm();
         this.get_all_Srv_own();
         this.get_all_Infra_own();
         this.get_all_BillingEntity();
         this.get_all_InvoiceVendor();
         this.get_all_InsuranceStatus();
         this.get_all_WarrantyStatus();
    
  }

  get_all_Srv_own(){
    this.srv_ownservice.get_all_Srv_own()
        .subscribe(data => {
          console.log("data", data);
          this.srv_own_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
}

   get_all_Srv_adm(){
     this.srv_admservice.get_all_Srv_adm()
         .subscribe(data => {
           console.log("data", data);
           this.srv_adm_list = data;
          // this.toastr.success('Success!');
         },
         error => {
          // this.toastr.error('Check the browser console to see more info.','Error!');
         });
 }

 get_all_Poyears() {
	 console.log("calling get_all_Poyears")
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
  update_Assetregisterbookform(){
      this.assetregisterbookformservice.update_Assetregisterbookform(this.assetregisterbookform)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_Assetregisterbookform(){
     // this.mymodalSFU.close();
      this.assetregisterbookformservice.search_for_update_Assetregisterbookform(this.assetregisterbookform.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.assetregisterbookform = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  delete_Assetregisterbookform(){
      this.assetregisterbookformservice.delete_Assetregisterbookform(this.assetregisterbookform)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

  get_all_UserallocationStatus() {
        this.userAllocationService.get_all_UserAllocationStatus().subscribe(data => {
          console.log('userall'+JSON.stringify(data));      
            this.user_allocation_status_list = data;
          },
          err => {
            console.log('error', err);
          });
    }

  get_all_Usedas() {
        this.usedusservice.get_all_UsedUs().subscribe(data => {
          console.log('usedas'+JSON.stringify(data));      
            this.usedas_list = data;
          },
          err => {
            console.log('error', err);
          });
    }

    get_all_RentalPlan(){
      this.rentalplanservice.get_all_RentalPlan()
          .subscribe(data => {
            console.log("data", data);
            this.rentalplan_list = data;
           // this.toastr.success('Success!');
          },
          error => {
           // this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  
  get_all_DataTransferLimit(){
    this.datatransferlimitservice.get_all_DataTransferLimit()
        .subscribe(data => {
          console.log("datatransferlimit_type--->", data);
          this.datatransferlimit_type = data;
         // this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_CensusCount(){
    this.censuscountservice.get_all_CensusCount()
        .subscribe(data => {
          console.log("censuscount_list--->", data);
          this.censuscount_list = data;
         // this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_ReasonForNotCount(){
    this.reasonfornotcountservice.get_all_ReasonForNotCount()
        .subscribe(data => {
          console.log("data", data);
          this.reasonfornotcount_list = data;
       //   this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_ModeOfUse(){
    this.modeofuseservice.get_all_ModeOfUse()
        .subscribe(data => {
          console.log("data", data);
          this.modeofuse_list = data;
       //   this.toastr.success('Success!');
        },
        error => {
       //   this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_ApproverOrProjectManager(){
    this.approverorprojectmanagerservice.get_all_ApproverOrProjectManager()
        .subscribe(data => {
          console.log("data", data);
          this.manager_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_Engineer(){
    this.engineerservice.get_all_Engineer()
        .subscribe(data => {
          console.log("data", data);
          this.engineer_list= data;
       //   this.toastr.success('Success!');
        },
        error => {
       //   this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_ProjectName(){
    this.projectnameservice.get_all_ProjectName()
        .subscribe(data => {
          console.log("data", data);
          this.projectname_list = data;
         // this.toastr.success('Success!');
        },
        error => {
         // this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_Accessories(){
    this.accessoriesservice.get_all_Accessories()
        .subscribe(data => {
          console.log("data", data);
          this.accessories_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_AllocatedFrom(){
    this.allocatedfromservice.get_all_AllocatedFrom()
        .subscribe(data => {
          console.log("data", data);
          this.allocatedfrom_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_BuildingOrFloor(){
    this.buildingorfloorservice.get_all_BuildingOrFloor()
        .subscribe(data => {
          console.log("data", data);
          this.buildingorflorr_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_Category(){
    this.categoryservice.get_all_Category()
        .subscribe(data => {
          console.log("data", data);
          this.category_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }
  
  get_all_Application(){
    this.applicationservice.get_all_Application()
        .subscribe(data => {
          console.log("data", data);
          this.application_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
  }

  get_all_Infra_own(){
    this.infra_ownservice.get_all_Infra_own()
        .subscribe(data => {
          console.log("data", data);
          this.infra_own_list = data;
        //  this.toastr.success('Success!');
        },
        error => {
        //  this.toastr.error('Check the browser console to see more info.','Error!');
        });
}

get_all_BillingEntity(){
  this.billingentityservice.get_all_BillingEntity()
      .subscribe(data => {
        console.log("data", data);
        this.billingentity_list = data;
     //   this.toastr.success('Success!');
      },
      error => {
     //   this.toastr.error('Check the browser console to see more info.','Error!');
      });
}

get_all_InvoiceVendor(){
  this.invoicevendorservice.get_all_InvoiceVendor()
      .subscribe(data => {
        console.log("data", data);
        this.vendor_list = data;
      //  this.toastr.success('Success!');
      },
      error => {
      //  this.toastr.error('Check the browser console to see more info.','Error!');
      });
}

get_all_InsuranceStatus(){
  this.insurancestatusservice.get_all_InsuranceStatus()
      .subscribe(data => {
        console.log("data", data);
        this.invoi_status_list = data;
      //  this.toastr.success('Success!');
      },
      error => {
      //  this.toastr.error('Check the browser console to see more info.','Error!');
      });
}

get_all_WarrantyStatus(){
  this.warrantystatusservice.get_all_WarrantyStatus()
      .subscribe(data => {
        console.log("data", data);
        this.warstatus_list = data;
      //  this.toastr.success('Success!');
      },
      error => {
      //  this.toastr.error('Check the browser console to see more info.','Error!');
      });
}

}