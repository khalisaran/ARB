import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IPoyear } from './poyear';

@Injectable()
export class PoyearService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Poyear(poyear: IPoyear): Observable<IPoyear>{
        return this.apiService.post(this.config.api_url+`/Poyear_Activity/create_Poyear`,poyear);

    }
    update_Poyear(poyear: IPoyear): Observable<IPoyear>{
        return this.apiService.put(this.config.api_url+`/Poyear_Activity/update_Poyear`,poyear);

    }
    search_for_update_Poyear(poyear_id: number): Observable<IPoyear>{
        return this.apiService.get(this.config.api_url+`Poyear_Activity/search_for_update_Poyear/${poyear_id}`);

    }
    delete_Poyear(poyear: IPoyear): Observable<IPoyear>{
        return this.apiService.delete(this.config.api_url+`Poyear_Activity/delete_Poyear/${poyear.id}`);

    }
    get_all_Poyear(): Observable<IPoyear[]>{
        return this.apiService.get(this.config.api_url+`/Poyear_Activity/get_all_Poyear`).map((res:Response) => res)
                                .catch((error:any) => Observable.throw(error || 'Server error')); 
  

    }
}