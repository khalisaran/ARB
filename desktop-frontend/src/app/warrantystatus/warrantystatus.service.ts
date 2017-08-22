import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IWarrantyStatus } from './warrantystatus';

@Injectable()
export class WarrantyStatusService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_WarrantyStatus(warrantystatus: IWarrantyStatus): Observable<IWarrantyStatus>{
        return this.apiService.post(this.config.api_url+`/WarrantyStatus_Activity/create_WarrantyStatus`,warrantystatus);

    }
    update_WarrantyStatus(warrantystatus: IWarrantyStatus): Observable<IWarrantyStatus>{
        return this.apiService.put(this.config.api_url+`/WarrantyStatus_Activity/update_WarrantyStatus`,warrantystatus);

    }
    search_for_update_WarrantyStatus(warrantystatus_id: number): Observable<IWarrantyStatus>{
        return this.apiService.get(this.config.api_url+`WarrantyStatus_Activity/search_for_update_WarrantyStatus/${warrantystatus_id}`);

    }
    delete_WarrantyStatus(warrantystatus: IWarrantyStatus): Observable<IWarrantyStatus>{
        return this.apiService.delete(this.config.api_url+`/WarrantyStatus_Activity/delete_WarrantyStatus/${warrantystatus.id}`);

    }
    get_all_WarrantyStatus(): Observable<IWarrantyStatus[]>{
        return this.apiService.get(this.config.api_url+`/WarrantyStatus_Activity/get_all_WarrantyStatus`).map((res:Response) => res)
                                .catch((error:any) => Observable.throw(error || 'Server error')); 

    }
}