import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceVendorScreenengComponent } from './invoicevendorscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { InvoiceVendorService } from './invoicevendor.service';

@NgModule({
    declarations: [
        InvoiceVendorScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'InvoiceVendorScreeneng', component: InvoiceVendorScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        InvoiceVendorService
    ]
})

export class InvoiceVendorModule {

}