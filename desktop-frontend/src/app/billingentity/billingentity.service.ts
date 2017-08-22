import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IBillingEntity } from './billingentity';

@Injectable()
export class BillingEntityService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_BillingEntity(billingentity: IBillingEntity): Observable<IBillingEntity>{
        return this.apiService.post(this.config.api_url+`/BillingEntity_Activity/create_BillingEntity`,billingentity);

    }
    update_BillingEntity(billingentity: IBillingEntity): Observable<IBillingEntity>{
        return this.apiService.put(this.config.api_url+`/BillingEntity_Activity/update_BillingEntity`,billingentity);

    }
    search_for_update_BillingEntity(billingentity_id: number): Observable<IBillingEntity>{
        return this.apiService.get(this.config.api_url+`/BillingEntity_Activity/search_for_update_BillingEntity/${billingentity_id}`);

    }
    delete_BillingEntity(billingentity: IBillingEntity): Observable<IBillingEntity>{
        return this.apiService.delete(this.config.api_url+`/BillingEntity_Activity/delete_BillingEntity/${billingentity.id}`);

    }
    get_all_BillingEntity(): Observable<IBillingEntity[]>{
        return this.apiService.get(this.config.api_url+`/BillingEntity_Activity/get_all_BillingEntity`)
        .map((res:Response) => res)
        .catch((error:any) => Observable.throw(error || 'Server error')); 

    }
}