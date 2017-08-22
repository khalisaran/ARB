import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetRegisterBookScreenOne_1engComponent } from './assetregisterbookscreenone_1eng.component';
import { AssetRegisterBookScreenOne_2engComponent } from './assetregisterbookscreenone_2eng.component';
import { AssetResgisterBookOne_3engComponent } from './assetresgisterbookone_3eng.component';
import { AssetRegisterBookScreenOne_4engComponent } from './assetregisterbookscreenone_4eng.component';
import { AssetRegisterBookScreenOne_5engComponent } from './assetregisterbookscreenone_5eng.component';
import { AssetRegisterBookScreenTwo_1engComponent } from './assetregisterbookscreentwo_1eng.component';
import { AssetRegisterBookScreenTwo_2engComponent } from './assetregisterbookscreentwo_2eng.component';
import { AssetRegisterBookScreenTwo_3engComponent } from './assetregisterbookscreentwo_3eng.component';
import { AssetRegisterBookScreenTwo_4engComponent } from './assetregisterbookscreentwo_4eng.component';
import { PurchaseOrderDetailsScreenengComponent } from './purchaseorderdetailsscreeneng.component';
import { InvoiceDetailsScreenengComponent } from './invoicedetailsscreeneng.component';
import { WarrentyDetailsScreenengComponent } from './warrentydetailsscreeneng.component';
import { InsuranceDetailScreenengComponent } from './insurancedetailscreeneng.component';
import { AuditTrailScreenengComponent } from './audittrailscreeneng.component';
import { MainScreenengComponent } from './mainscreeneng.component';
import { LandingPageScreenengComponent } from './landingpagescreeneng.component';
import { UserAllocationScreenOne_1engComponent } from './userallocationscreenone_1eng.component';
import { UserAllocationScreenOne_2engComponent } from './userallocationscreenone_2eng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap';
import { AgGridModule } from 'ag-grid-angular/main';
import { AssetregisterbookformService } from './assetregisterbookform.service';

@NgModule({
    declarations: [
        AssetRegisterBookScreenOne_1engComponent,
        AssetRegisterBookScreenOne_2engComponent,
        AssetResgisterBookOne_3engComponent,
        AssetRegisterBookScreenOne_4engComponent,
        AssetRegisterBookScreenOne_5engComponent,
        AssetRegisterBookScreenTwo_1engComponent,
        AssetRegisterBookScreenTwo_2engComponent,
        AssetRegisterBookScreenTwo_3engComponent,
        AssetRegisterBookScreenTwo_4engComponent,
        PurchaseOrderDetailsScreenengComponent,
        InvoiceDetailsScreenengComponent,
        WarrentyDetailsScreenengComponent,
        InsuranceDetailScreenengComponent,
        AuditTrailScreenengComponent,
        MainScreenengComponent,
        LandingPageScreenengComponent,
        UserAllocationScreenOne_1engComponent,
        UserAllocationScreenOne_2engComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        MdSelectModule,
        CommonModule,
        TabsModule.forRoot(),
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'AssetRegisterBookScreenOne_1eng', component: AssetRegisterBookScreenOne_1engComponent},
            { path: 'AssetRegisterBookScreenOne_2eng', component: AssetRegisterBookScreenOne_2engComponent},
            { path: 'AssetResgisterBookOne_3eng', component: AssetResgisterBookOne_3engComponent},
            { path: 'AssetRegisterBookScreenOne_4eng', component: AssetRegisterBookScreenOne_4engComponent},
            { path: 'AssetRegisterBookScreenOne_5eng', component: AssetRegisterBookScreenOne_5engComponent},
            { path: 'AssetRegisterBookScreenTwo_1eng', component: AssetRegisterBookScreenTwo_1engComponent},
            { path: 'AssetRegisterBookScreenTwo_2eng', component: AssetRegisterBookScreenTwo_2engComponent},
            { path: 'AssetRegisterBookScreenTwo_3eng', component: AssetRegisterBookScreenTwo_3engComponent},
            { path: 'AssetRegisterBookScreenTwo_4eng', component: AssetRegisterBookScreenTwo_4engComponent},
            { path: 'PurchaseOrderDetailsScreeneng', component: PurchaseOrderDetailsScreenengComponent},
            { path: 'InvoiceDetailsScreeneng', component: InvoiceDetailsScreenengComponent},
            { path: 'WarrentyDetailsScreeneng', component: WarrentyDetailsScreenengComponent},
            { path: 'InsuranceDetailScreeneng', component: InsuranceDetailScreenengComponent},
            { path: 'AuditTrailScreeneng', component: AuditTrailScreenengComponent},
            { path: 'MainScreeneng', component: MainScreenengComponent},
            { path: 'MainScreeneng/:id', component: MainScreenengComponent},
            { path: 'LandingPageScreeneng', component: LandingPageScreenengComponent},
            { path: 'UserAllocationScreenOne_1eng', component: UserAllocationScreenOne_1engComponent},
            { path: 'UserAllocationScreenOne_2eng', component: UserAllocationScreenOne_2engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        AssetregisterbookformService
    ]
})

export class AssetregisterbookformModule {

}