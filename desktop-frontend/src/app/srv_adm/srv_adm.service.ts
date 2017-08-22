import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ISrv_adm } from './srv_adm';

@Injectable()
export class Srv_admService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Srv_adm(srv_adm: ISrv_adm): Observable<ISrv_adm>{
        return this.apiService.post(this.config.api_url+`/Srv_adm_Default_Activity/create_Srv_adm`,srv_adm);

    }
    update_Srv_adm(srv_adm: ISrv_adm): Observable<ISrv_adm>{
        return this.apiService.put(this.config.api_url+`/Srv_adm_Default_Activity/update_Srv_adm`,srv_adm);

    }
    search_for_update_Srv_adm(srv_adm_id: number): Observable<ISrv_adm>{
        return this.apiService.get(this.config.api_url+`/Srv_adm_Default_Activity/search_for_update_Srv_adm/${srv_adm_id}`);

    }
    delete_Srv_adm(srv_adm: ISrv_adm): Observable<ISrv_adm>{
        return this.apiService.delete(this.config.api_url+`/Srv_adm_Default_Activity/delete_Srv_adm/${srv_adm.id}`);

    }
    get_all_Srv_adm(): Observable<ISrv_adm[]>{
        return this.apiService.get(this.config.api_url+`/Srv_adm_Default_Activity/get_all_Srv_adm`);

    }
}