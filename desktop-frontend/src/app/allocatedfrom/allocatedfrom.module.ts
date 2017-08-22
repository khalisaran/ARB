import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllocatedFromScreenengComponent } from './allocatedfromscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AllocatedFromService } from './allocatedfrom.service';

@NgModule({
    declarations: [
        AllocatedFromScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'AllocatedFromScreeneng', component: AllocatedFromScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        AllocatedFromService
    ]
})

export class AllocatedFromModule {

}