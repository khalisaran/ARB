import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IOfficeLocation } from './officelocation';

@Injectable()
export class OfficeLocationService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_OfficeLocation(officelocation: IOfficeLocation): Observable<IOfficeLocation>{
        return this.apiService.post(this.config.api_url+`/OfficeLocation_Activity/create_OfficeLocation`,officelocation);

    }
    update_OfficeLocation(officelocation: IOfficeLocation): Observable<IOfficeLocation>{
        return this.apiService.put(this.config.api_url+`/OfficeLocation_Activity/update_OfficeLocation`,officelocation);

    }
    search_for_update_OfficeLocation(officelocation_id: number): Observable<IOfficeLocation>{
        return this.apiService.get(this.config.api_url+`/OfficeLocation_Activity/search_for_update_OfficeLocation/${officelocation_id}`);

    }
    delete_OfficeLocation(officelocation: IOfficeLocation): Observable<IOfficeLocation>{
        return this.apiService.delete(this.config.api_url+`/OfficeLocation_Activity/delete_OfficeLocation/${officelocation.id}`);

    }
    get_all_OfficeLocation(): Observable<IOfficeLocation[]>{
        return this.apiService.get(this.config.api_url+`/OfficeLocation_Activity/get_all_OfficeLocation`);

    }
}