import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ICurrency } from './currency';

@Injectable()
export class CurrencyService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Currency(currency: ICurrency): Observable<ICurrency>{
        return this.apiService.post(this.config.api_url+`/Currency_Activity/create_Currency`,currency);

    }
    update_Currency(currency: ICurrency): Observable<ICurrency>{
        return this.apiService.put(this.config.api_url+`/Currency_Activity/update_Currency`,currency);

    }
    search_for_update_Currency(currency_id: number): Observable<ICurrency>{
        return this.apiService.get(this.config.api_url+`/Currency_Activity/search_for_update_Currency/${currency_id}`);

    }
    delete_Currency(currency: ICurrency): Observable<ICurrency>{
        return this.apiService.delete(this.config.api_url+`/Currency_Activity/delete_Currency/${currency.id}`);

    }
    get_all_Currency(): Observable<ICurrency[]>{
        return this.apiService.get(this.config.api_url+`/Currency_Activity/get_all_Currency`)
        .map((res:Response) => res)
        .catch((error:any) => Observable.throw(error || 'Server error')); 
  
    }
}