import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_1750_DataTransferLimitengComponent } from './screen_1750_datatransferlimiteng.component';
import { Data_limit_list_screenengComponent } from './data_limit_list_screeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { DataTransferLimitService } from './datatransferlimit.service';

@NgModule({
    declarations: [
        Screen_1750_DataTransferLimitengComponent,
        Data_limit_list_screenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule, AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'Screen_1750_DataTransferLimiteng', component: Screen_1750_DataTransferLimitengComponent},
            { path: 'Data_limit_list_screeneng', component: Data_limit_list_screenengComponent}
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