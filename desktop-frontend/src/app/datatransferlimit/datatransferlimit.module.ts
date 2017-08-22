import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_1750_DataTransferLimitengComponent } from './screen_1750_datatransferlimiteng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DataTransferLimitService } from './datatransferlimit.service';

@NgModule({
    declarations: [
        Screen_1750_DataTransferLimitengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Screen_1750_DataTransferLimiteng', component: Screen_1750_DataTransferLimitengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        DataTransferLimitService
    ]
})

export class DataTransferLimitModule {

}