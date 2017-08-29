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
  selectedRowData:any[];

   private Table_151GridOptions: GridOptions;
   private array_Assetregisterbookform :any[];
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private assetregisterbookformservice: AssetregisterbookformService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.assetregisterbookform = assetregisterbookformservice.IAssetregisterbookform;
    this.Table_151GridOptions = {
    	columnDefs: [
    		{
          headerName: "Account(CAF)Number",
          field: "acc_no",
        },{
          headerName: "Asset Identity",
          field: "identity",
        },{
          headerName: "Asset Code",
          field: "code",
        },{
          headerName: "PWC Asset Number",
          field: "asset_number",
        },{
          headerName: "Office",
          field: "loc5",
        },{
          headerName: "Room",
          field: "room",
        },{
          headerName: "Last verification Date",
          field: "lvd",
        },{
          headerName: "Last verified By",
          field: "engineer_1",
        },{
          headerName: "Purpose",
          field: "purpose",
        },{
          headerName: "Rack No",
          field: "rack1",
        },{
          headerName: "Current Location",
          field: "location1",
        },{
          headerName: "Make",
          field: "make",
        },{
          headerName: "Model",
          field: "model",
        },{
    			headerName: "Datacard Type",
    			field: "data_type",
    		},
    		{
    			headerName: "Contract Period Duration",
    			field: "cpd",
    		},{
           headerName:"Data transfer limit",
          field:"data_limit"
        },{
          headerName:"Payment StartDate  with rental chages",
          field:"payment_start_date",
        },{
          headerName:"Free Rental",
          field:"fr",
         },{
           headerName:"Fixed Cost",
           field:"fc",
         },{
           headerName:"Rental Plan",
           field:"rental"
         },{
           headerName:"Start Date",
           field:"start_date",
          },{
            headerName:"End Date",
            field:"end_date"
          },{
            headerName:"Advanced Rental",
            field:"ar",
          },
        {
            headerName:"Deactivation Type",
            field:"dact_type",
          },{
            headerName:"Permanent Deactivation Date",
            field:"dact_on",
          },{
            headerName:"1st Deactivation Date",
            field:"dact_on_1",
          },{
            headerName:"2nd Deactivation Date",
            field:"dact_on_2",
          },{
            headerName:"3rd Deactivation Date",
            field:"dact_on_3",
          },{
            headerName:"1st Reactivation Date",
            field:"ract_on_1",
          },{
            headerName:"2nd Reactivation Date",
            field:"ract_on_2",
          },{
            headerName:"3rd Reactivation Date",
            field:"ract_on_3",
          },{
            headerName:"Remarks",
            field:"remk",
          },{
            headerName:"iOS version",
            field:"ios",
          },{
            headerName:"FLASH",
            field:"flash",
          },{
            headerName:"DRAM",
            field:"dram",
          },{
            headerName:"Supplied by GTL",
            field:"supply",
          },{
            headerName:"No. of Serial Port",
            field:"serial1",
          },{
            headerName:"No. of ISDN Port",
            field:"isdn",
          },{
            headerName:"No. of Ethernet Port",
            field:"ethernet",
          },{
            headerName:"No. of PSTN Port",
            field:"pstn",
          },{//configuration details object
            headerName:"Processor",
            field:"processor",
          },{
            headerName:"Initial HDD(GB)",
            field:"hdd_initial",
          },{
            headerName:"Initial RAM(GB)",
            field:"ram_initial",
          },{
            headerName:"CPU Speed(MHz)",
            field:"config",
          },{
            headerName:"Present HDD(GB)",
            field:"hdd",
          },{
            headerName:"Present RAM(GB)",
            field:"ram",
          },{
            headerName:"No.of CPU",
            field:"cpu",
          },{
            headerName:"HDD Details",
            field:"hdd1",
          },{
            headerName:"DAT,DLT(GB)",
            field:"dat",
          },{
            headerName:"RAM Details",
            field:"ram1",
          },{
            headerName:"Model No",
            field:"model_no",
          },{
            headerName:"Speed",
            field:"speed",
          },{
            headerName:"PortNo",
            field:"port",
          },{
            headerName:"Catrige NO",
            field:"catrige_no",
          },{//purchase Order Details
            headerName:"PO Date",
            field:"po_date"
          }/*,{
            headerName:"PO Display Date",
            field:"disppo_date",
          }*/,{
            headerName:"PO Ref. No.",
            field:"po_ref_no",
          },{
            headerName:"PO Financial Year",
            field:"po_year",
          },{
            headerName:"Other Information",
            field:"ol2_1",
          },{
            headerName:"PO Entity",
            field:"po_entity",
          },{
            headerName:"Purchase Currency",
            field:"currency",
          },{
            headerName:"Unit Cost",
            field:"cost",
          },{
            headerName:"Delivery Date",
            field:"delivery_date"
           },{//Invoice details
            headerName:"Invoice Date",
            field:"inv_date",
          },{
            headerName:"Invoice Number",
            field:"inv_no",
          },{
            headerName:"Vendor Name",
            field:"inv_vendor",
          },{
            headerName:"Invoice Other Information",
            field:"ol2",
          },{
            headerName:"Billing Entity",
            field:"bill_entity",
          },{
            headerName:"Invoice Currency",
            field:"inv_currency",
          },/*{
            headerName:"Invoice Amount",
            field:"inv_amount",
          },*/{
            headerName:"Installation Date",
            field:"inst_date",
          },/*,{
            headerName:"Installation Display Date",
            field:"dispinst_date",
          },*/{//Insurance Details
            headerName:"Insurance Status",
            field:"ins_status",
          },{
            headerName:"Policy Number",
            field:"ins_policy_no",
          },{
            headerName:"Company Name",
            field:"ins_com_name",
          },{
            headerName:"Insurance Other Information",
            field:"ol1_1",
          },{
            headerName:"Insured Value",
            field:"ins_value",
          },{
            headerName:"Policy End Date",
            field:"ins_expiry_date",
          },/*,{
            headerName:"Policy End Display Date",
            field:"dispins_expiry_date",
          },*/{
            headerName:"Renewal Required?",
            field:"ins_renewal",
          },{
            headerName:"Date of Communication",
            field:"doc",
          },{//Audit Trail
            headerName:"Created By",
            field:"created_by",
          },{
            headerName:"Last Modified By",
            field:"eheditor",
          },{
            headerName:"Created On",
            field:"created_on",
          },{
            headerName:"Last Modified On",
            field:"ehDate",
          },{
            headerName:"oprn_grp",
            field:"oprn_grp",
          },{
            headerName:"Despatch from Kolkata to",
            field:"loc",
          },{
            headerName:"Despatch Date",
            field:"ddate",
          },{
            headerName:"date1",
            field:"date1",
          },{
            headerName:"date2",
            field:"date2",
          },{//Other information Tab
            headerName:"Counted for Census?",
            field:"census_count",
          },{
            headerName:"Reason for not count",
            field:"census_reason",
          },{
            headerName:"Remarks OtherInformation",
            field:"census_remarks",
          },{
            headerName:"Mode of Use",
            field:"mode",
          },{
            headerName:"Date of Allocaiton",
            field:"doa",
          },{
            headerName:"Engineer's Name",
            field:"engineer",
          },{
            headerName:"Last returned by",
            field:"last",
          },{
            headerName:"Accessories",
            field:"acce_1",
          },{
            headerName:"Allocated from",
            field:"collected_from",
          },{
            headerName:"Allocation Form no.",
            field:"allocation_form_no",
          },{
            headerName:"safegaurd Installed?",
            field:"sg",
          },{
            headerName:"Approver/Project Manager",
            field:"approver",
          },{
            headerName:"Expected date of return",
            field:"edor",
          },{
            headerName:"Project Name",
            field:"project_name",
          },{
            headerName:"Project Code",
            field:"project_code",
          },{
            headerName:"Mac Address",
            field:"mac_add",
          },{
           headerName:"Bulider/Floor",
           field:"floor_number",
         },
        {
          headerName:"Seat No.",
          field:"seat_number",
        },
        {
          headerName:"Host Name",
          field:"host_name",
        },{
          headerName:"I.P.Address",
          field:"ip",
        },/*{
          headerName:"I.P.Address display",
          field:"ip_1",
        },*/{
          headerName:"OS",
          field:"os",
        },{
          headerName:"Service Pack",
          field:"sp",
        },{
          headerName:"Type",
          field:"type",
        },{
          headerName:"Hardware Type",
          field:"h_type",
        },{
          headerName:"Category",
          field:"category",
        },{
          headerName:"Application",
          field:"application1",
        },{
          headerName:"Functionality",
          field:"application",
        },{
          headerName:"Server Administrator",
          field:"srv_adm",
        },{
          headerName:"Server Owner",
          field:"srv_own",
        },{
          headerName:"Infrastructure owner",
          field:"infra_own",
        },{
          headerName:"System Steward",
          field:"syssteward",
        },{
          headerName:"Office Location",
          field:"office",
        },{
          headerName:"Rack No.",
          field:"rack",
        },{
          headerName:"Shelf No.",
          field:"shelf",
        },{
          headerName:"Server Imporance",
          field:"type2",
        },{
          headerName:"Date of assignment of server",
          field:"doa1",
        },{
          headerName:"dispayDoa",
          field:"dispdoa1",
        },{
          headerName:"Expected realese date",
          field:"erd",
        },{
          headerName:"Display ERD",
          field:"disperd",
        },{
          headerName:"Network Category(VLAN)",
          field:"net_cat",
        },{
          headerName:"HYPER V Server?",
          field:"hyper",
        },{
          headerName:"HYPER Server Name",
          field:"hyper_1",
        },{
          headerName:"Connection",
          field:"connection",
        },{
          headerName:"Mobile No",
          field:"airtelno",
        },{
          headerName:"Scan copy of user signed Document",
          field:"scan",
        },{
          headerName:"Data Classification",
          field:"dc1",
        },{
          headerName:"Remarks(if any)",
          field:"remarks_1",
        },{
          headerName:"Status",
          field:"wty_status",
        },{
          headerName:"Start Date",
          field:"wty_start_date",
        }/*,{
          headerName:"Display Start Date",
          field:"dispwty_start_date",
        }*/,{
          headerName:"End Date",
          field:"wty_end_date",
        },/*{
          headerName:"Display End date ",
          field:"dispwty_end_date",
        },*/{
          headerName:"Carepack No.",
          field:"carepack",
        },{
          headerName:"OtherInfo(if any)",
          field:"ol1",
        },{
          headerName:"AMC Start Date",
          field:"amc_start_date",
        },{
          headerName:"AMC_End_Date",
          field:"amc_end_date",
        },{
          headerName:"Support Vendor",
          field:"sup_vendor",
        },{
          headerName:"Terms",
          field:"wty_terms",
        },{
          headerName:"GST File No.",
          field:"file_no",
        },{
          headerName:"AMC terms",
          field:"amc_terms",
        }
    ],
    
    defaultColDef: {
      width: 100,
      headerCheckboxSelection: this.isFirstColumn,
      checkboxSelection: this.isFirstColumn
  },
      enableFilter: true,
      enableSorting: true,
      showToolPanel: true,
      enableColResize: true,
      enableStatusBar: true,
      enableRangeSelection:true,
      rowSelection: 'single',
      groupSelectsChildren: true,
      suppressRowClickSelection: true,
      
    	/*onRowClicked: function(event) {
      	console.error('on selecting row');
        
        this.assetregisterbookform = event.node.data;
        assetregisterbookformservice.IAssetregisterbookform = this.assetregisterbookform;
        console.log('a row was clickedddd'+JSON.stringify(assetregisterbookformservice.IAssetregisterbookform));
        this.onEditSelected();
        //this.router.navigateByUrl('/MainScreeneng');
    	}*/
    };

  }
  

  ngOnInit() {
    this.get_all_Assetregisterbookform();
  }

  isFirstColumn(params){
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }
  exportcsv(){
    console.log("exporting data")
    var param ={
      fileName: document.querySelector('#fileName')
    }
    this.Table_151GridOptions.api.exportDataAsCsv();
  }

  onRemoveSelected() {
    console.log("removing data")
    //this.router.navigate(['/MainScreeneng']); 
    this.selectedRowData = this.Table_151GridOptions.api.getSelectedRows();
    //console.error("selected row data------>"+JSON.stringify(this.selectedRowData));
    for(var i =0; i<this.selectedRowData.length; i++){
      var datatodeletd = this.selectedRowData[i];
     // console.log("data to delete----->"+JSON.stringify(datatodeletd))
      this.delete_Assetregisterbookform(datatodeletd);
    }
  }

  delete_Assetregisterbookform(delassetregisterbookform){
    console.log("deleting data "+delassetregisterbookform.id)
    this.assetregisterbookformservice.delete_Assetregisterbookform(delassetregisterbookform)
        .subscribe(data => {
          console.log("data", data);
          this.toastr.success('Success!');
          this.get_all_Assetregisterbookform();
      //   this.scrambleAndRefreshAll();
        },
        error => {
          this.toastr.error('Check the browser console to see more info.','Error!');
        });
}

  onEditSelected(event) {

    this.assetregisterbookform = event.node.data;
    this.assetregisterbookformservice.IAssetregisterbookform = this.assetregisterbookform;
    console.log('a row was clickedddd'+JSON.stringify(this.assetregisterbookformservice.IAssetregisterbookform));
    this.router.navigate(['MainScreeneng',event.node.data.id]);
    
  }

// scrambleAndRefreshAll() {
//   this.scramble();
//   var params = {
//       force: isForceRefreshSelected()
//   };
//   this.Table_151GridOptions.api.refreshCells(params);
// }

// scramble() {
//   rowData.forEach(scrambleItem);
//   topRowData.forEach(scrambleItem);
//   bottomRowData.forEach(scrambleItem);
// }
   

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