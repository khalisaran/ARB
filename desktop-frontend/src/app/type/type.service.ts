import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IType } from './type';

@Injectable()
export class TypeService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Type(type: IType): Observable<IType>{
        return this.apiService.post(this.config.api_url+`/Type_Activity/create_Type`,type);

    }
    update_Type(type: IType): Observable<IType>{
        return this.apiService.put(this.config.api_url+`/Type_Activity/update_Type`,type);

    }
    search_for_update_Type(type_id: number): Observable<IType>{
        return this.apiService.get(this.config.api_url+`/Type_Activity/search_for_update_Type/${type_id}`);

    }
    delete_Type(type: IType): Observable<IType>{
        return this.apiService.delete(this.config.api_url+`/Type_Activity/delete_Type/${type.id}`);

    }
    get_all_Type(): Observable<IType[]>{
        return this.apiService.get(this.config.api_url+`/Type_Activity/get_all_Type`);

    }
}