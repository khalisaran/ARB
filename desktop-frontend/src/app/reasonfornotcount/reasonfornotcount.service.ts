import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IReasonForNotCount } from './reasonfornotcount';

@Injectable()
export class ReasonForNotCountService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_ReasonForNotCount(reasonfornotcount: IReasonForNotCount): Observable<IReasonForNotCount>{
        return this.apiService.post(this.config.api_url+`/ReasonForNotCount/create_ReasonForNotCount`,reasonfornotcount);

    }
    update_ReasonForNotCount(reasonfornotcount: IReasonForNotCount): Observable<IReasonForNotCount>{
        return this.apiService.put(this.config.api_url+`/ReasonForNotCount/update_ReasonForNotCount`,reasonfornotcount);

    }
    search_for_update_ReasonForNotCount(reasonfornotcount_id: number): Observable<IReasonForNotCount>{
        return this.apiService.get(this.config.api_url+`/ReasonForNotCount/search_for_update_ReasonForNotCount/${reasonfornotcount_id}`);

    }
    delete_ReasonForNotCount(reasonfornotcount: IReasonForNotCount): Observable<IReasonForNotCount>{
        return this.apiService.delete(this.config.api_url+`/ReasonForNotCount/delete_ReasonForNotCount/${reasonfornotcount.id}`);

    }
    get_all_ReasonForNotCount(): Observable<IReasonForNotCount[]>{
        return this.apiService.get(this.config.api_url+`/ReasonForNotCount/get_all_ReasonForNotCount`);

    }
}