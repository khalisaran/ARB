import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationScreenengComponent } from './applicationscreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ApplicationService } from './application.service';

@NgModule({
    declarations: [
        ApplicationScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'ApplicationScreeneng', component: ApplicationScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ApplicationService
    ]
})

export class ApplicationModule {

}