import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModeOfUseScreenengComponent } from './modeofusescreeneng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ModeOfUseService } from './modeofuse.service';

@NgModule({
    declarations: [
        ModeOfUseScreenengComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'ModeOfUseScreeneng', component: ModeOfUseScreenengComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ModeOfUseService
    ]
})

export class ModeOfUseModule {

}