import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IIdentity } from './identity';

@Injectable()
export class IdentityService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Identity(identity: IIdentity): Observable<IIdentity>{
        return this.apiService.post(this.config.api_url+`/Identity_Activity/create_Identity`,identity);

    }
    update_Identity(identity: IIdentity): Observable<IIdentity>{
        return this.apiService.put(this.config.api_url+`/Identity_Activity/update_Identity`,identity);

    }
    search_for_update_Identity(identity_id: number): Observable<IIdentity>{
        return this.apiService.get(this.config.api_url+`/Identity_Activity/search_for_update_Identity/${identity_id}`);

    }
    delete_Identity(identity: IIdentity): Observable<IIdentity>{
        return this.apiService.delete(this.config.api_url+`/Identity_Activity/delete_Identity/${identity.id}`);

    }
    get_all_Identity(): Observable<IIdentity[]>{
        return this.apiService.get(this.config.api_url+`/Identity_Activity/get_all_Identity`);

    }
}