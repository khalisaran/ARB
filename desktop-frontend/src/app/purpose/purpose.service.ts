import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IPurpose } from './purpose';

@Injectable()
export class PurposeService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Purpose(purpose: IPurpose): Observable<IPurpose>{
        return this.apiService.post(this.config.api_url+`/Purpose_Activity/create_Purpose`,purpose);

    }
    update_Purpose(purpose: IPurpose): Observable<IPurpose>{
        return this.apiService.put(this.config.api_url+`/Purpose_Activity/update_Purpose`,purpose);

    }
    search_for_update_Purpose(purpose_id: number): Observable<IPurpose>{
        return this.apiService.get(this.config.api_url+`/Purpose_Activity/search_for_update_Purpose/${purpose_id}`);

    }
    delete_Purpose(purpose: IPurpose): Observable<IPurpose>{
        return this.apiService.delete(this.config.api_url+`/Purpose_Activity/delete_Purpose/${purpose.id}`);

    }
    get_all_Purpose(): Observable<IPurpose[]>{
        return this.apiService.get(this.config.api_url+`/Purpose_Activity/get_all_Purpose`);

    }
}