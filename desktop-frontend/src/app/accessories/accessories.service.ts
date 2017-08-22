import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IAccessories } from './accessories';

@Injectable()
export class AccessoriesService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Accessories(accessories: IAccessories): Observable<IAccessories>{
        return this.apiService.post(this.config.api_url+`/Accessories/create_Accessories`,accessories);

    }
    update_Accessories(accessories: IAccessories): Observable<IAccessories>{
        return this.apiService.put(this.config.api_url+`/Accessories/update_Accessories`,accessories);

    }
    search_for_update_Accessories(accessories_id: number): Observable<IAccessories>{
        return this.apiService.get(this.config.api_url+`/Accessories/search_for_update_Accessories/${accessories_id}`);

    }
    delete_Accessories(accessories: IAccessories): Observable<IAccessories>{
        return this.apiService.delete(this.config.api_url+`/Accessories/delete_Accessories/${accessories.id}`);

    }
    get_all_Accessories(): Observable<IAccessories[]>{
        return this.apiService.get(this.config.api_url+`/Accessories/get_all_Accessories`);

    }
}