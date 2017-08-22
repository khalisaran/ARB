import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IInfra_own } from './infra_own';

@Injectable()
export class Infra_ownService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Infra_own(infra_own: IInfra_own): Observable<IInfra_own>{
        return this.apiService.post(this.config.api_url+`/Infra_own_Default_Activity/create_Infra_own`,infra_own);

    }
    update_Infra_own(infra_own: IInfra_own): Observable<IInfra_own>{
        return this.apiService.put(this.config.api_url+`/Infra_own_Default_Activity/update_Infra_own`,infra_own);

    }
    search_for_update_Infra_own(infra_own_id: number): Observable<IInfra_own>{
        return this.apiService.get(this.config.api_url+`/Infra_own_Default_Activity/search_for_update_Infra_own/${infra_own_id}`);

    }
    delete_Infra_own(infra_own: IInfra_own): Observable<IInfra_own>{
        return this.apiService.delete(this.config.api_url+`/Infra_own_Default_Activity/delete_Infra_own/${infra_own.id}`);

    }
    get_all_Infra_own(): Observable<IInfra_own[]>{
        return this.apiService.get(this.config.api_url+`/Infra_own_Default_Activity/get_all_Infra_own`);

    }
}