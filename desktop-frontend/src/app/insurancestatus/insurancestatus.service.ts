import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IInsuranceStatus } from './insurancestatus';

@Injectable()
export class InsuranceStatusService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_InsuranceStatus(insurancestatus: IInsuranceStatus): Observable<IInsuranceStatus>{
        return this.apiService.post(this.config.api_url+`/InsuranceStatus_Activity/create_InsuranceStatus`,insurancestatus);

    }
    update_InsuranceStatus(insurancestatus: IInsuranceStatus): Observable<IInsuranceStatus>{
        return this.apiService.put(this.config.api_url+`/InsuranceStatus_Activity/update_InsuranceStatus`,insurancestatus);

    }
    search_for_update_InsuranceStatus(insurancestatus_id: number): Observable<IInsuranceStatus>{
        return this.apiService.get(this.config.api_url+`/InsuranceStatus_Activity/search_for_update_InsuranceStatus/${insurancestatus_id}`);

    }
    delete_InsuranceStatus(insurancestatus: IInsuranceStatus): Observable<IInsuranceStatus>{
        return this.apiService.delete(this.config.api_url+`/InsuranceStatus_Activity/delete_InsuranceStatus/${insurancestatus.id}`);

    }
    get_all_InsuranceStatus(): Observable<IInsuranceStatus[]>{
        return this.apiService.get(this.config.api_url+`/InsuranceStatus_Activity/get_all_InsuranceStatus`);

    }
}