import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ISrv_own } from './srv_own';

@Injectable()
export class Srv_ownService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Srv_own(srv_own: ISrv_own): Observable<ISrv_own>{
        return this.apiService.post(this.config.api_url+`/Srv_own_Default_Activity/create_Srv_own`,srv_own);

    }
    update_Srv_own(srv_own: ISrv_own): Observable<ISrv_own>{
        return this.apiService.put(this.config.api_url+`/Srv_own_Default_Activity/update_Srv_own`,srv_own);

    }
    search_for_update_Srv_own(srv_own_id: number): Observable<ISrv_own>{
        return this.apiService.get(this.config.api_url+`/Srv_own_Default_Activity/search_for_update_Srv_own/${srv_own_id}`);

    }
    delete_Srv_own(srv_own: ISrv_own): Observable<ISrv_own>{
        return this.apiService.delete(this.config.api_url+`/Srv_own_Default_Activity/delete_Srv_own/${srv_own.id}`);

    }
    get_all_Srv_own(): Observable<ISrv_own[]>{
        return this.apiService.get(this.config.api_url+`/Srv_own_Default_Activity/get_all_Srv_own`);

    }
}