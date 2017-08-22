import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Infra_own_screenengComponent } from './infra_own_screeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Infra_ownService } from './infra_own.service';

@NgModule({
    declarations: [
        Infra_own_screenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Infra_own_screeneng', component: Infra_own_screenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        Infra_ownService
    ]
})

export class Infra_ownModule {

}