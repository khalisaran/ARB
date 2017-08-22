import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformService } from './assetregisterbookform.service';
import { GridOptions } from 'ag-grid';
import { IAssetregisterbookform } from './assetregisterbookform';

@Component({
    moduleId: module.id,
    templateUrl: 'landingpagescreeneng.component.html'
})
export class LandingPageScreenengComponent implements OnInit {
  private assetregisterbookform: IAssetregisterbookform;
  
   private Table_151GridOptions: GridOptions;
   private array_Assetregisterbookform :any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private assetregisterbookformservice: AssetregisterbookformService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
    this.Table_151GridOptions = {
    	columnDefs: [
    		{
    			headerName: "Account(CAF)Number",
    			field: "accountcafnumber",
    		},
    		{
    			headerName: "Datacard Type",
    			field: "datacardtype",
    		},
    		{
    			headerName: "Contract Period Duration",
    			field: "contractperiodduration",
    		},
        {
          headerName:"Invoice Amount",
          field:"invoiceAmount",
        },
        {
          headerName:"Policy Number",
          field:"policyNumber",
        }
        ,{
           headerName:"Data transfer limit",
          field:"datatransferlimit"
        },{
          headerName:"Payment StartDate  with rental chages",
          field:"paymentstartdatewithrentalchages",
        },{
          headerName:"Free Rental",
          field:"freerental",
         },{
           headerName:"Bulider/Floor",
           field:"buliderfloor",
         },{
           headerName:"Fixed Cost",
           field:"fixedcost",
         },{
           headerName:"Rental Plan",
           field:"rentalplan"
         },{
           headerName:"Start Date",
           field:"startdate",
          },{
            headerName:"End Date",
            field:"enddate"
          },{
            headerName:"Advanced Rental",
            field:"advancedrental",
          },{
            headerName:"Deactivation Type",
            field:"deactivationtype",
          },{
            headerName:"Permanent Deactivation Date",
            field:"permanentdeactivationdate",
          },{
            headerName:"1st Deactivation Date",
            field:"firstdeactivationdate",
          },,{
            headerName:"2nd Deactivation Date",
            field:"seconddeactivationdate",
          },{
            headerName:"3rd Deactivation Date",
            field:"thirddeactivationdate",
          },{
            headerName:"1st Reactivation Date",
            field:"firstreactivationdate",
          },{
            headerName:"2nd Reactivation Date",
            field:"secondreactivationdate",
          },{
            headerName:"3rd Reactivation Date",
            field:"thirdreactivationdate",
          },{
            headerName:"Remarks",
            field:"remarks",
          },{
            headerName:"iOS version",
            field:"iosversion",
          },{
            headerName:"FLASH",
            field:"flash",
          },{
            headerName:"DRAM",
            field:"dram",
          },{
            headerName:"Supplied by GTL",
            field:"suppliedbygtl",
          },{
            headerName:"No. of Serial Port",
            field:"noofserialport",
          },{
            headerName:"No. of ISDN Port",
            field:"noofisdnport",
          },{
            headerName:"No. of Ethernet Port",
            field:"noofethernetport",
          },{
            headerName:"No. of PSTN Port",
            field:"noofpstnport",
          },{//configuration details object
            headerName:"Processor",
            field:"processor",
          },{
            headerName:"Initial HDD(GB)",
            field:"initialhddgb",
          },{
            headerName:"Initial RAM(GB)",
            field:"initialramgb",
          },{
            headerName:"CPU Speed(MHz)",
            field:"cpuspeedmhz",
          },{
            headerName:"Present HDD(GB)",
            field:"presenthddgb",
          },{
            headerName:"Present RAM(GB)",
            field:"presentramgb",
          },{
            headerName:"No.of CPU",
            field:"noofcpu",
          },{
            headerName:"HDD Details",
            field:"hdddetails",
          },{
            headerName:"DAT,DLT(GB)",
            field:"datdltingb",
          },{
            headerName:"RAM Details",
            field:"ramdetails",
          },{
            headerName:"Model No",
            field:"modelno",
          },{
            headerName:"Speed",
            field:"speed",
          },{
            headerName:"PortNo",
            field:"portno",
          },{
            headerName:"Catrige NO",
            field:"catrigeno",
          },{//purchase Order Details
            headerName:"PO Date",
            field:"podate"
          },{
            headerName:"PO Ref. No.",
            field:"porefno",
          },{
            headerName:"PO Financial Year",
            field:"pofinancialyear",
          },{
            headerName:"Other Information",
            field:"otherinformation",
          },{
            headerName:"PO Entity",
            field:"poentity",
          },{
            headerName:"Purchase Currency",
            field:"pur_currency",
          },{
            headerName:"Unit Cost",
            field:"unitcost",
          },{
            headerName:"Delivery Date",
            field:"deliverydate"
           },{//Invoice details
            headerName:"Invoice Date",
            field:"Invoice Date",
          },{
            headerName:"Invoice Number",
            field:"invoicenumber",
          },{
            headerName:"Vendor Name",
            field:"vendorname",
          },{
            headerName:"Invoice Other Information",
            field:"otherinformation",
          },{
            headerName:"Billing Entity",
            field:"billingentity"
          },{
            headerName:"Invoice Currency",
            field:"inv_currency",
          },{
            headerName:"Invoice Amount",
            field:"invoiceamount",
          },{
            headerName:"Installation Date",
            field:"installationdate",
          },{//Warrenty Details
            headerName:"Warranty Status",
            field:"status",
          },{
            headerName:"Policy Number",
            field:"policynumber",
          },{
            headerName:"Company Name",
            field:"companyname",
          },{
            headerName:"Insurance Other Information",
            field:"otherinformation",
          },{
            headerName:"Insured Value",
            field:"insuredvalue",
          },{
            headerName:"Policy End Date",
            field:"policyenddate",
          },{
            headerName:"Renewal Required?",
            field:"renewalrequired",
          },{
            headerName:"Date of Communication",
            field:"dateofcommunication",
          },{//Audit Trail
            headerName:"Created By",
            field:"createdby",
          },{
            headerName:"Last Modified By",
            field:"lastmodifiedby",
          },{
            headerName:"Created On",
            field:"createdon",
          },{
            headerName:"Last Modified On",
            field:"lastmodifiedon",
          },{
            headerName:"oprn_grp",
            field:"oprn_grp",
          },{
            headerName:"Despatch from Kolkata to",
            field:"despatchfromkolkatato",
          },{
            headerName:"Despatch Date",
            field:"despatchdate",
          },{
            headerName:"date1",
            field:"date1",
          },{
            headerName:"date2",
            field:"date2",
          },{//Other information Tab
            headerName:"Counted for Census?",
            field:"countedforcensus",
          },{
            headerName:"Reason for not count",
            field:"reasonfornotcount",
          },{
            headerName:"Remarks OtherInformation",
            field:"remarks",
          },{
            headerName:"Mode of Use",
            field:"modeofuse",
          },{
            headerName:"Date of Allocaiton",
            field:"dateofallocaiton",
          },{
            headerName:"Engineer's Name",
            field:"engineersname",
          },{
            headerName:"Last returned by",
            field:"lastreturnedby",
          },{
            headerName:"Accessories",
            field:"accessories",
          },{
            headerName:"Allocated from",
            field:"allocatedfrom",
          },{
            headerName:"Allocation Form no.",
            field:"allocationformno",
          }/*,{
            headerName:"",
            field:"",
          },{
            headerName:"",
            field:"",
          },{
            headerName:"",
            field:"",
          },{
            headerName:"",
            field:"",
          },{
            headerName:"",
            field:"",
          },{
            headerName:"",
            field:"",
          }  */  	],
          
    	rowSelection: 'single',
    	onRowClicked: function(event) {
    	//	console.log('a row was clicked'+JSON.stringify(event.node.data));
        this.assetregisterbookform = event.node.data;
        assetregisterbookformservice.IAssetregisterbookform = this.assetregisterbookform;
        console.log('a row was clickedddd'+JSON.stringify(assetregisterbookformservice.IAssetregisterbookform));
        //this.router.navigateByUrl('/MainScreeneng');
    	}
    };

  }

  ngOnInit() {
    this.get_all_Assetregisterbookform();
  }

   

  get_all_Assetregisterbookform(){
      this.assetregisterbookformservice.get_all_Assetregisterbookform()
          .subscribe(data => {
            console.log("data", data);
            this.array_Assetregisterbookform = data;
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}