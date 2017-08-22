import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReasonForNotCount_screenengComponent } from './reasonfornotcount_screeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReasonForNotCountService } from './reasonfornotcount.service';

@NgModule({
    declarations: [
        ReasonForNotCount_screenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'ReasonForNotCount_screeneng', component: ReasonForNotCount_screenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ReasonForNotCountService
    ]
})

export class ReasonForNotCountModule {

}