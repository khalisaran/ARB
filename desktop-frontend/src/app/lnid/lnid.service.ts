import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ILNID } from './lnid';

@Injectable()
export class LNIDService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_LNID(lnid: ILNID): Observable<ILNID>{
        return this.apiService.post(this.config.api_url+`/LNID/create_LNID`,lnid);

    }
    update_LNID(lnid: ILNID): Observable<ILNID>{
        return this.apiService.put(this.config.api_url+`/LNID/update_LNID`,lnid);

    }
    search_for_update_LNID(lnid_id: number): Observable<ILNID>{
        return this.apiService.get(this.config.api_url+`/LNID/search_for_update_LNID/${lnid_id}`);

    }
    delete_LNID(lnid: ILNID): Observable<ILNID>{
        return this.apiService.delete(this.config.api_url+`/LNID/delete_LNID/${lnid.id}`);

    }
    get_all_LNID(): Observable<ILNID[]>{
        return this.apiService.get(this.config.api_url+`/LNID/get_all_LNID`);

    }
}