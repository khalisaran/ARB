import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { ConfigService } from './config/config.service';
import { ApiService } from './config/api.service';
import { customHttpProvider } from './_helpers/custom-http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AssetregisterbookformModule } from './assetregisterbookform/assetregisterbookform.module';
import { RentalPlanModule } from './rentalplan/rentalplan.module';
import { DataTransferLimitModule } from './datatransferlimit/datatransferlimit.module';
import { LNIDModule } from './lnid/lnid.module';
import { CensusCountModule } from './censuscount/censuscount.module';
import { ReasonForNotCountModule } from './reasonfornotcount/reasonfornotcount.module';
import { ModeOfUseModule } from './modeofuse/modeofuse.module';
import { EngineerModule } from './engineer/engineer.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { AllocatedFromModule } from './allocatedfrom/allocatedfrom.module';
import { ApproverOrProjectManagerModule } from './approverorprojectmanager/approverorprojectmanager.module';
import { ProjectNameModule } from './projectname/projectname.module';
import { BuildingOrFloorModule } from './buildingorfloor/buildingorfloor.module';
import { OSModule } from './os/os.module';
import { CategoryModule } from './category/category.module';
import { ApplicationModule } from './application/application.module';
import { PoyearModule } from './poyear/poyear.module';
import { PoentityModule } from './poentity/poentity.module';
import { CurrencyModule } from './currency/currency.module';
import { InvoiceVendorModule } from './invoicevendor/invoicevendor.module';
import { BillingEntityModule } from './billingentity/billingentity.module';
import { WarrantyStatusModule } from './warrantystatus/warrantystatus.module';
import { InsuranceStatusModule } from './insurancestatus/insurancestatus.module';
import { UserAllocationStatusModule } from './userallocationstatus/userallocationstatus.module';
import { UsedUsModule } from './usedus/usedus.module';
import { SgModule } from './sg/sg.module';
import { TypeModule } from './type/type.module';
import { Srv_admModule } from './srv_adm/srv_adm.module';
import { Srv_ownModule } from './srv_own/srv_own.module';
import { Infra_ownModule } from './infra_own/infra_own.module';

import { IdentityModule } from './identity/identity.module';
import { PurposeModule } from './purpose/purpose.module';
import { OfficeLocationModule } from './officelocation/officelocation.module';
import { RoomModule } from './room/room.module';
import { CurrentLocationModule } from './currentlocation/currentlocation.module';

import { HeaderENComponent } from './header/header-en.component';
import { HeaderDEComponent } from './header/header-de.component';
import { FooterENComponent } from './footer/footer-en.component';
import { FooterDEComponent } from './footer/footer-de.component';
import { HomeENComponent } from './home/home-en.component';
import { HomeDEComponent } from './home/home-de.component';
import{LandingPageScreenengComponent} from './assetregisterbookform/landingpagescreeneng.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: LandingPageScreenengComponent},

      { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: '**', redirectTo: 'home', pathMatch: 'full'}

    ]),
AssetregisterbookformModule,
RentalPlanModule,
DataTransferLimitModule,
LNIDModule,
CensusCountModule,
ReasonForNotCountModule,
ModeOfUseModule,
EngineerModule,
AccessoriesModule,
AllocatedFromModule,
ApproverOrProjectManagerModule,
ProjectNameModule,
BuildingOrFloorModule,
OSModule,
CategoryModule,
ApplicationModule,
PoyearModule,
PoentityModule,
CurrencyModule,
InvoiceVendorModule,
BillingEntityModule,
WarrantyStatusModule,
InsuranceStatusModule,
UserAllocationStatusModule,
UsedUsModule,
SgModule,
Srv_admModule,
Srv_ownModule,
Infra_ownModule,
TypeModule,
IdentityModule,
PurposeModule,
OfficeLocationModule,
RoomModule,
CurrentLocationModule
  ],
  providers: [
    SharedService,
    ConfigService,
    ApiService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
HeaderDEComponent,
FooterENComponent,
FooterDEComponent,
HomeENComponent,
HomeDEComponent
  ],
  entryComponents: [
    HeaderENComponent,
    HeaderDEComponent,
    FooterENComponent,
    FooterDEComponent,
    HomeENComponent,
    HomeDEComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }