import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ICensusCount } from './censuscount';

@Injectable()
export class CensusCountService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_CensusCount(censuscount: ICensusCount): Observable<ICensusCount>{
        return this.apiService.post(this.config.api_url+`/CensusCount/create_CensusCount`,censuscount);

    }
    update_CensusCount(censuscount: ICensusCount): Observable<ICensusCount>{
        return this.apiService.put(this.config.api_url+`/CensusCount/update_CensusCount`,censuscount);

    }
    search_for_update_CensusCount(censuscount_id: number): Observable<ICensusCount>{
        return this.apiService.get(this.config.api_url+`/CensusCount/search_for_update_CensusCount/${censuscount_id}`);

    }
    delete_CensusCount(censuscount: ICensusCount): Observable<ICensusCount>{
        return this.apiService.delete(this.config.api_url+`/CensusCount/delete_CensusCount/${censuscount.id}`);

    }
    get_all_CensusCount(): Observable<ICensusCount[]>{
        return this.apiService.get(this.config.api_url+`/CensusCount/get_all_CensusCount`);

    }
}